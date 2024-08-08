<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <a href="https://github.com/timdream/wordcloud2.js/tree/gh-pages" target="_blank">Link</a>
    <input v-model="words" style="padding: 0.8rem; min-width: 60vw; margin-bottom: 1rem" />
    <canvas ref="canvas" id="canvas"></canvas>
    <div style="height: 1rem"></div>
    <button @click="save()">Capture</button>
  </div>
</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import capture from '@/core/capture'
import WordCloud from 'wordcloud'
const words = ref('')
const canvas = ref(null)
function save() {
  capture(canvas.value)
}
function adjustCanvas(sel) {
  const canvas = document.querySelector(sel)
  const ctx = canvas.getContext('2d')

  // 获取设备的像素比例
  const devicePixelRatio = window.devicePixelRatio || 1
  const backingStoreRatio =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1

  const ratio = devicePixelRatio / backingStoreRatio

  // 设置 Canvas 的宽度和高度
  canvas.width = canvas.clientWidth * ratio
  canvas.height = canvas.clientHeight * ratio

  // 重新设置 Canvas 的 CSS 尺寸
  canvas.style.width = canvas.clientWidth + 'px'
  canvas.style.height = canvas.clientHeight + 'px'

  // 应用缩放
  ctx.scale(ratio, ratio)
}

function refresh(list) {
  let canvas = document.querySelector('#canvas')
  if (!canvas) {
    console.log('===> canvas is null')
    return
  }
  let canvasWidth = canvas.clientWidth
  WordCloud(canvas, {
    list: list,
    gridSize: Math.round((16 * canvasWidth) / 1024),
    weightFactor: function (size) {
      return (Math.pow(size, 2.3) * canvasWidth) / 1024
    },
    fontFamily: 'Times, serif',
    color: function (word, weight) {
      return weight === 12 ? '#f02222' : '#c09292'
    },
    rotateRatio: 0.5,
    rotationSteps: 2,
    backgroundColor: '#ffe0e0'
  })
}
const list = [
  ['互联网科技', 8],
  ['人工智能', 9],
  ['新能源汽车', 8],
  ['生物医药', 7],
  ['金融服务', 7],
  ['教育培训', 7],
  ['电子商务', 8],
  ['短视频直播', 9],
  ['智能制造', 7],
  ['养老服务', 6]
]
onMounted(() => {
  requestAnimationFrame(() => {
    adjustCanvas('#canvas')
  })
  refresh(list)
  watchEffect(() => {
    if (words.value !== '') {
      var wrodList = words.value.split(/,/)
      wrodList = wrodList.map((item, index, m) => {
        return [item, 1 + index]
      })
      refresh(wrodList)
    }
  })
})
</script>
<style scoped>
canvas {
  width: 400px;
  height: 300px;
  border-radius: 1rem;
}
</style>

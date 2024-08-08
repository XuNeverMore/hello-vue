<script setup>
import { provide, ref, reactive, watch, onMounted } from 'vue'
import archive from '@/assets/archive'
import capture from '@/core/capture'
console.log(archive.maoyi)
const data = archive.archives[0]
function saveImg() {
  const node = document.querySelector('#wheelContainer')
  capture(node)
}
function randomColor() {
  const node = document.querySelector('#wheelContainer')
  let start = getRandomColor()
  let end = getRandomColor()
  node.style.background = `linear-gradient(${start},${end})`
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgba(${r},${g},${b},1)`
}
const color = ref('rgba(255,255,255,1)')
const textColor = ref('rgba(0,0,0,1)')
</script>
<template>
  <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
    <div style="display: flex">
      <button @click="randomColor()">随机边框</button>
      <label>背景色</label><input type="color" v-model="color" /> <label>文字颜色</label
      ><input type="color" v-model="textColor" />
      <button @click="saveImg">保存图片</button>
    </div>
    <div style="height: 1rem"></div>
    <div id="wheelContainer" @click="startRotation()">
      <div class="card" :style="{ backgroundColor: color }">
        <div style="display: flex">
          <h2 :style="{ color: textColor }">{{ data.title }}</h2>
          <div style="height: 0.85rem; flex: 1"></div>
          <div style="display: flex; align-items: center">
            <img src="https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico" />
            <div style="width: 0.5rem"></div>
            <span style="display: block" :style="{ color: textColor }">江南好</span>
          </div>
        </div>
        <div style="height: 0.8rem"></div>
        <p id="arc" :style="{ color: textColor }">{{ data.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#wheelContainer {
  padding: 1.8rem;
}
.card {
  position: relative;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  background-color: green;
  border-radius: 0.5rem;
  padding: 1rem;
}
@media screen and (min-width: 600px) {
  #wheelContainer {
    width: 500px;
    height: 100%;
    padding: 2rem;
  }
}

* {
  box-sizing: border-box;
}
.hello {
  position: absolute;
  background-color: blue;
  width: 200px;
  height: 100px;
  color: aliceblue;
  left: 0;
  top: 0;
}
IconCommunity {
  position: absolute;
  left: 0;
  top: 0;
}
</style>

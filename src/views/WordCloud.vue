<template>
  <div>
    <a href="https://github.com/timdream/wordcloud2.js/tree/gh-pages" target="_blank">Link</a>
    <input v-model="words" />
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import WordCloud from 'wordcloud'
const words = ref('')
const canvas = ref(null)
onMounted(() => {
  watchEffect(() => {
    if (words.value !== '') {
      var wrodList = words.value.split(/,/)
      wrodList = wrodList.map((item, index, m) => {
        return [item, 1 + index]
      })
      console.log(wrodList)
      WordCloud(canvas.value, {
        list: wrodList,
        minSize: '50px',
        fontWeight: 'bold'
      })
    }
  })
})
</script>
<style scoped>
canvas {
  border: 0.1rem solid #000;
  width: 80vh;
  height: 60vh;
}
</style>

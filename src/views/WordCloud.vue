<template>
  <div>
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
        return [item, 30 + index]
      })
      console.log(wrodList)
      WordCloud(canvas.value, {
        list: wrodList,
        fontWeight: 'bold',
        fontSize: '18px'
      })
    }
  })
})
</script>
<style scoped>
canvas {
  background-color: gray;
  width: 80vh;
  height: 60vh;
}
</style>

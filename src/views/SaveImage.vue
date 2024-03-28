<script setup>
import { provide, ref, reactive, watch, onMounted } from 'vue'
import * as htmlToImage from 'html-to-image'
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image'
import archive from '@/assets/archive'
console.log(archive.maoyi)
provide('wheelRadius', '250')
const rotation = ref(28)
const tweened = reactive({
  number: 0
})
const data = archive.archives[0]
function saveImg() {
  const node = document.querySelector('#wheelContainer')
  htmlToImage
    .toPng(node)
    .then(function (dataUrl) {
      downloadImage(dataUrl, `${Date.now()}.png`)
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error)
    })
}
// 将dataURL保存为图片文件并下载
function downloadImage(dataURL, filename) {
  var link = document.createElement('a')
  link.href = dataURL
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
var targetAngle = 360
const color = ref('black')
const textColor = ref('white')
watch(color, (newColor) => {
  console.log(newColor)
  // 创建一个Date对象
  const currentDate = Date.now()
  console.log('now', currentDate)
})
watch(tweened, (t) => {
  rotation.value = t.number
  // console.log('watch number:'+t.number)
})
watch(rotation, (r) => {
  // console.log('watch rotation:' + r)
})
function startRotation() {
  gsap.to(tweened, { duration: 2, number: targetAngle })
  targetAngle = targetAngle + 360
}
onMounted(() => {})
provide('wheelRotation', rotation)
const url = `https://www.douyin.com/user/MS4wLjABAAAA2JV2IPtw8Pr2LI83gpWHmBQUfj80IYx7gGXlj-W2oe4?is_search=0&list_name=follow&nt=0`
// fetch(url, { headers: { 'Access-Control-Allow-Origin': '*' }, mode: 'cors' })
//   .then((rep) => {
//     return rep.text()
//   })
//   .catch((e) => console.log(e))
//   .then((text) => {
//     console.log('text\n', text)
//   })
</script>
<template>
  <div>
    <div style="display: flex">
      <label>背景色</label><input type="color" v-model="color" /> <label>文字颜色</label
      ><input type="color" v-model="textColor" />
      <button @click="saveImg">保存图片</button>
    </div>
    <div id="wheelContainer" @click="startRotation()" :style="{ backgroundColor: color }">
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

      -->
    </div>
  </div>
</template>

<style scoped>
#wheelContainer {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  background-color: green;
  border-radius: 1rem;
  padding: 1rem;
}
@media screen and (min-width: 600px) {
  #wheelContainer {
    width: 400px;
    margin: auto;
    height: 100%;
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

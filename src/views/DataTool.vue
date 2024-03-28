<template>
  <div>
    <label>选择图片</label>
    <input type="file" @change="handleChange" />
    <img :src="imgSrc" alt="" style="width: 100%; max-height: 100vw" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const imgSrc = ref('')
function handleChange(e) {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = (e) => {
    console.log(e.target.result)
    imgSrc.value = e.target.result
  }
}
</script>

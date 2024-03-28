<script setup>
import { marked } from 'marked'
import { onMounted, ref, watchEffect } from 'vue'
const content = ref('')
const convert = debounce(() => {
  document.getElementById('content').innerHTML = marked.parse(content.value)
}, 800)
onMounted(() => {
  watchEffect(() => {
    if (content.value) {
      convert()
    }
  })
})
function debounce(fun, delay) {
  let timer
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, arguments)
    }, delay)
  }
}
</script>
<template>
  <div style="display: flex; flex-direction: row; width: 100%; height: 100%; min-height: 80vh">
    <textarea
      type="text"
      class="edit"
      @input="(e) => (content = e.target.value)"
      placeholder="markdown"
    />
    <div id="content"></div>
  </div>
  <div style="padding: 2px">
    文件转换：node tools/MarkdownConvert.js inputfilepath outputfilepath
  </div>
</template>
<style scoped>
.edit {
  display: block;
  flex: 1;
  width: 50%;
  outline: none;
  min-height: 60vh;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding: 1rem;
}
.edit:focus {
  border: 1px solid green;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
}
#content {
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-left: 1rem;
  flex: 1;
  padding: 1rem;
  /** shadow */
  box-shadow: 0 0 1rem rgba(0, 0, 1, 0.2);
}
</style>

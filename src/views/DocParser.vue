<template>
  <div class="row screen">
    <textarea class="half" v-model="original"></textarea>
    <textarea class="half"></textarea>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
const original = defineModel()
watchEffect(() => {
  let content = original.value
})
</script>

<style scoped>
@import url(../assets/widget.css);
.half {
  width: 50%;
  height: 100%;
}
input {
  text-align: left;
  vertical-align: top;
  border: 1px solid black;
  font-size: 16px;
  margin: 2px;
  line-height: 20px;
}
.screen {
  position: fixed;
  top: 5vh;
  left: 0;
  align-items: start;
  width: 100%;
  height: 100%;
}
</style>

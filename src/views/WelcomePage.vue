<template>
  <div class="column">
    <span style="display: block; font-size: 2rem">欢迎</span>
    <pre>
        <code ref="codeWrapper" class="language-kotlin"></code>
    </pre>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import '@/assets/widget.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import kotlin from 'highlight.js/lib/languages/kotlin'
const codeWrapper = ref(null)
// Then register the languages you need
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('kotlin', kotlin)
const code = `@Parcelize
@Serializable
data class IconItem(
    override val text: String,
    override val icon: String,
) : IIconItem<String>, Parcelable

@Parcelize
@Serializable
data class IconResItem(
    override val text: String,
    @DrawableRes override val icon: Int,
) : IIconItem<Int>, Parcelable

interface ISelectGroup {
    val selectedId: String
}`
onMounted(() => {
  if (codeWrapper.value) {
    codeWrapper.value.innerHTML = hljs.highlight(code, { language: 'kotlin' }).value
  }
})
</script>

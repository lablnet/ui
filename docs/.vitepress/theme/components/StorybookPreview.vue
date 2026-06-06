<template>
  <iframe
    v-if="mounted"
    :src="src"
    width="100%"
    :height="height"
    style="border: 1px solid var(--vp-c-divider); border-radius: 8px; background-color: var(--vp-c-bg);"
  ></iframe>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  height: {
    type: String,
    default: '220px'
  }
})

const mounted = ref(false)
const isDev = ref(false)

onMounted(() => {
  mounted.value = true
  isDev.value = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
})

const src = computed(() => {
  const path = `iframe.html?id=${props.id}&viewMode=story`
  return isDev.value
    ? `http://localhost:6006/${path}`
    : `/storybook/${path}`
})
</script>

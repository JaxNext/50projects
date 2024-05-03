<template>
  <p>event.key: {{ stroke?.key }}</p>
  <p>event.code: {{ stroke?.code }}</p>
  <p>event.keyCode: {{ stroke?.keyCode }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'

const stroke = ref<KeyboardEvent>()
onKeyStroke(true, e => {
  stroke.value = e
})
</script>

<style scoped lang="scss">

</style>
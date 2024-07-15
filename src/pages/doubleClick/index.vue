<template>
  <div class="click-box w-[400px] h-[300px] bg-gray cursor-pointer relative" @dblclick="dbclick">
    Pretend here is a image
    <div class="heart w-[30px] h-[30px] rounded-[50%] bg-red  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" :style="heartStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const heartStyle = ref({})
function dbclick(e: MouseEvent) {
  const { layerX, layerY } = e
  heartStyle.value = { left: `${layerX}px`, top: `${layerY}px` }
}
</script>

<style scoped>

</style>
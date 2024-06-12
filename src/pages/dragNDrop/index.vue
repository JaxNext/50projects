<template>
  <div
    v-for="n in num"
    :ref="el => boxes.push(el as HTMLElement)"
    :key="n"
    class="w-[200px] h-[200px] bg-gray-500 inline-block m-[10px] relative"
    :style="{ 'box-shadow': overMap[n-1] ? 'inset 0 0 50px green' : 'none' }">
    <img
      v-if="n === idx"
      ref="logo"
      src="@/assets/vue.svg"
      class="w-[100px] h-[100px] inline-block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useDropZone } from '@vueuse/core'
const idx = ref(1)
const num = 4
const boxes = ref<HTMLElement[]>([])
const logo = ref()
const overMap = ref<Boolean[]>([])

onMounted(() => {
  for (let i = 0; i < boxes.value.length; i++) {
    const box = boxes.value[i]
    const node = logo.value?.[0]
    const { isOverDropZone } = useDropZone(box, () => box.appendChild(node))
    overMap.value[i] = isOverDropZone.value
  }
})
</script>

<style scoped lang="scss">

</style>
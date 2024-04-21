<template>
  <div class="cards-box flex">
    <div
      v-for="(color, index) in list"
      :key="index"
      :class="['card w-[10px] h-[240px] mr-[18px] rounded-[40px] cursor-pointer', { 'w-full': active === index }]"
      :style="{ background: color }"
      @click="active = index"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ list: any[] }>()
const active = defineModel('active', { default: 0 })
</script>

<style scoped lang="scss">
.card {
  transition: width 0.5s ease;
}
</style>
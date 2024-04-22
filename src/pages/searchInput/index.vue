<template>
  <div class="wrapper flex">
    <input
      ref="ipt"
      :class="['ipt border-none bg-orange p-0 indent-[10px]', { 'active': active }]"
      type="text" />
    <div class="icon w-[40px] h-[40px] flex items-center justify-center bg-orange cursor-pointer" @click="toggle">S</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref(false)
const ipt = ref()
function toggle() {
  active.value = !active.value
  active.value && ipt.value.focus()
}
</script>

<style scoped lang="scss">
.ipt {
  width: 0;
  transition: width 0.5s ease;
  &.active {
    width: 240px;
  }
  &:focus {
    outline: none;
  }
}
</style>
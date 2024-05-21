<template>
  <div
    ref="btn"
    class="btn p-[10px] bg-orange inline-block cursor-default relative overflow-hidden"
    @click="showRipple">点击出现波纹</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouse, useParentElement } from '@vueuse/core'
import type { UseMouseEventExtractor } from '@vueuse/core'
import { wait } from '~/utils/index';
const parentEle = useParentElement()
const extractor: UseMouseEventExtractor = e => e instanceof Touch ? null : [e.offsetX, e.offsetY]
const { x, y } = useMouse({
  target: parentEle,
  type: extractor
})
const btn = ref()
const duration = ref(500)
const durationStr = computed(() => `${duration.value / 1000}s`)
async function showRipple() {
  const w = btn.value?.offsetWidth * 2
  const div = document.createElement('div')
  div.className = `ripple`
  div.style.width = `${w}px`
  div.style.height = `${w}px`
  div.style.left = `${x.value - w / 2}px`
  div.style.top = `${y.value - w / 2}px`
  btn.value?.appendChild(div)
  await wait(duration.value)
  btn.value?.removeChild(div)
}
</script>

<style lang="scss">
.ripple {
  display: block;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  transform: scale(0);
  animation: ripple v-bind(durationStr) ease-out;
}
@keyframes ripple {
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
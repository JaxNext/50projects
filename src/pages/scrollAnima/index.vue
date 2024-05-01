<template>
  <h3>SCROLL ANIMATION</h3>
  <div
    ref="wrapper"
    class="wrapper w-[300px] mx-auto pb-[150px] box-border"
    @scroll="handleScroll">
    <TransitionGroup name="list">
      <div
        v-for="n in num"
        :key="n"
        class="brick flex items-center justify-center w-[200px] h-[150px] bg-green my-[10px] mx-auto rounded">{{ n }}</div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, toRefs } from 'vue'
import { useScroll } from '@vueuse/core'

const wrapper = ref<HTMLElement | null>()
const num = ref(2)

const { isScrolling, directions } = useScroll(wrapper, { behavior: 'auto' })
const { top: toTop, bottom: toBottom } = toRefs(directions)
const wrapperH = computed(() => {
  return wrapper.value?.offsetHeight || 0
})
const brickH = 150
const marginTop = 10
const bottomDistance = computed(() => {
  return wrapperH.value - (brickH + marginTop) * num.value
})
// 初始列表不足一屏时自动补足
watch(() => bottomDistance.value, async val => {
  if (!wrapper?.value || isScrolling?.value) return
  if (val > marginTop) {
    num.value += 1
  }
})
// 滚动列表时动态增减
function handleScroll() {
  const h = (brickH + marginTop) * (num.value + 1)
  const top = wrapper.value?.scrollTop || 0
  const gap = h - wrapperH.value - top
  if (toBottom.value && gap <= 60) {
    num.value += 1
  }
  if (toTop.value && gap >= 130) {
    num.value -= 1
  }
}
</script>

<style scoped lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.wrapper {
  height: calc(100vh - 100px);
  border: 1px solid orangered;
  overflow: scroll;
  .brick:nth-child(2n) {
    &.list-enter-from,
    &.list-leave-to {
      transform: translateX(-100px);
    }
  }
}
</style>
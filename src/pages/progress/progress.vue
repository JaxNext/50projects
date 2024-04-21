<template>
  <div class="knots-box flex mx-auto w-fit">
    <div
      v-for="n in num"
      :key="n"
      :class="['knot flex items-center', { 'covered': active >= n - 1 }]"
    >
      <div class="line bg-gray w-[50px] h-[4px]">
        <div class="progress w-[0] h-[4px]"></div>
      </div>
      <div :class="['index flex items-center justify-center w-[20px] h-[20px] rounded-[50%] cursor-pointer border-solid border-[4px] b-gray']">{{ n }}</div>
    </div>
  </div>
  <div class="btn-box my-[12px]">
    <button class="btn mx-[8px]" @click="active = Math.max(0, active - 1)">prev</button>
    <button class="btn mx-[8px]" @click="active = Math.min(num - 1, active + 1)">next</button>
  </div>
</template>

<script setup lang="ts">
const active = defineModel('active', { default: 0 })
defineProps<{ num: number }>()
</script>

<style scoped lang="scss">
.knots-box {
  $covered-color: green;
  .knot {
    &:first-of-type {
      .line {
        display: none;
      }
    }
    &.covered {
      .index {
        color: $covered-color;
        border-color: $covered-color;
      }
      .line .progress {
        width: 100%;
        background: $covered-color;
      }
    }
  }
}
</style>
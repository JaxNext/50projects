<template>
  <div class="tips">用英文逗号分隔，按回车键执行</div>
  <textarea v-model="text" @keypress.enter.prevent="run"></textarea>
  <div class="options">
    <div
      v-for="(option, index) in options"
      :key="index"
      :class="['option m-[10px] inline-block rounded-[5px] px-[10px] py-[5px] bg-gray', { 'bg-orange': option === res }]">
      {{ option }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { wait } from '~/utils/index'
const text = ref('')
const res = ref('')
const loopNum = 5
const options = computed(() => {
  return text.value.split(',').filter(Boolean)
})
async function run() {
  const list = options.value
  const length = list.length
  const resIndex = getRandomIndex(length)
  for (let i = 0; i < loopNum; i++) {
    for (let j = 0; j < length; j++) {
      res.value = list[j]
      if (i === loopNum - 1 && j === resIndex) {
        break
      }
      await wait(100)
    }
  }
}
function getRandomIndex(num: number) {
  return Math.floor(Math.random() * num)
}
</script>

<style scoped lang="scss">

</style>
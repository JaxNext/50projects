<template>
  <div class="ipt text-left my-[10px] relative">
    <div class="label text-left absolute top-[0px] left-0">
      <span
        v-for="(item, index) in label"
        :key="index"
        :class="['letter', { 'high': focused || iptVal }]"
        :style="{ transitionDelay: `${index * 0.05}s` }">{{ item }}</span>
    </div>
    <input
      ref="ipt"
      class="border-none bg-transparent focus:outline-none pt-[8px]"
      v-model="iptVal" />
  </div>
  <div class="text-left"><button class="btn text-left" @click="submit">submit</button></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFocus } from '@vueuse/core'
const ipt = ref()
const { focused } = useFocus(ipt)
const iptVal = ref('')
const label = 'Email'
function submit() {
  if (!iptVal.value) {
    focused.value = true
  }
}
</script>

<style scoped lang="scss">
.ipt input {
  border-bottom: 1px solid skyblue;
}
.letter {
  transform: translateY(0);
  transition: all 0.2s ease;
  display: inline-block;
  &.high {
    transform: translateY(-16px);
    color: orange;
  }
}
</style>
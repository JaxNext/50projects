<template>
  <div class="wrapper cover border-solid border-orange relative">
    <div class="bg-box cover" :style="{ filter: `blur(${rest * 25}px)` }">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos error repellat velit non quod. Quibusdam inventore dolorum corporis facilis, debitis nesciunt labore alias necessitatibus temporibus natus aliquam, quasi impedit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sapiente nisi pariatur vitae quae explicabo illo voluptate ipsa rem dolorem, reiciendis aspernatur nulla necessitatibus ullam, perferendis architecto temporibus inventore maxime?</div>
    <div class="num absolute top-[50%] left-[50%] text-center" :style="{ opacity: rest }">{{ num }}%</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
const num = ref(0)

const rest = computed(() => (100 - num.value) / 100)

onMounted(() => {
  const timer = setInterval(() => {
    num.value += 1
    if (num.value >= 100) {
      clearInterval(timer)
    }
  }, 50)
})
</script>

<style scoped lang="scss">
.cover {
  width: 300px;
  height: 200px;
  overflow: hidden;
}
</style>
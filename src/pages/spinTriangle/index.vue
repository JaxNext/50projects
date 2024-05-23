<template>
  <div class="box">
    <div class="triangle"></div>
    <div class="triangle follower"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const duration = ref(2)
const durationStr = computed(() => `${duration.value}s`)
</script>

<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  position: relative;
}
.triangle {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-top: 100px solid orange;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: spin;
  animation-duration: v-bind(durationStr);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform-origin: bottom center;
  &.follower {
    border-right: 100px solid green;
    border-top: 100px solid transparent;
    border-bottom: 100px solid transparent;
    animation-name: spin2;
    transform-origin: center center;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-180deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  75% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  75% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
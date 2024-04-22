<template>
  <h3>SCROLL ANIMATION</h3>
  <div class="list-box w-[300px] mx-auto">
    <div class="wrapper">
      <div
        v-for="n in num"
        :key="n"
        class="brick flex items-center justify-center w-[200px] h-[150px] bg-green my-[10px] mx-auto rounded">{{ n }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const num = ref(5)

</script>

<style scoped lang="scss">
.list-box {
  height: calc(100vh - 100px);
  border: 1px solid orangered;
  overflow: scroll;
  .wrapper {
    padding-bottom: 200px;
  }
}
</style>
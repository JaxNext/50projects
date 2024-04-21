<template>
  <h3>PROGRESS</h3>
  <Progress v-model:active="active" :num="4" class="w-fit mx-auto" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Progress from './progress.vue'

const active = ref(0)
</script>

<style scoped>

</style>
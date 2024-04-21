<template>
  <h3>Expand Cards</h3>
  <Cards v-model:active="active" :list="list" />
</template>

<script setup lang="ts">
import Cards from './cards.vue'
import { ref } from 'vue'

const active = ref(0)
const list = ['orange', 'yellow', 'blue', 'green', 'red']
</script>

<style scoped lang="scss">

</style>
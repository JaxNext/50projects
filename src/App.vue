<template>
  <div class="home-page w-[100vw] h-[100vh] flex">
    <div class="toc-box box-border p-4 w-[200px] border-0 border-r border-red-200 border-solid">
      <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
      >{{ route.name }}</router-link>
    </div>
    <div class="preview-box w-full box-border p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
// get all route paths
const routes = router.getRoutes()

console.log('routes', routes)

</script>

<style scoped lang="scss">

</style>

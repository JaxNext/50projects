<template>
  <div class="wrapper w-[100%] h-[100%] flex">
    <div class="left box bg-orange w-[50%] h-[100%] flex items-center justify-center">
      <h2 class="text">LEFT</h2>
    </div>
    <div class="right box bg-green w-[50%] h-[100%] flex items-center justify-center">
      <h2 class="text">RIGHT</h2>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.box {
  transition: all 0.5s ease;
  background-image: url('./img/ps.jpg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left;
  &.right {
    background-image: url('./img/xbox.jpg');
  }
}
.wrapper:hover {
  .box {
    width: 30%;
    &:hover {
      width: 70%;
    }
  }
}
</style>
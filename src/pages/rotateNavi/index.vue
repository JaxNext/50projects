<template>
  <div :class="['turntable w-[100px] h-[100px] rounded-[50%] bg-orange absolute top-[-50px] left-[-50px]', { 'spinned': spinned }]" @click="spinned = !spinned">
    <div class="menu-btn w-[50px] h-[50px] absolute top-[50%] left-[50%] text-left indent-[10px]">M</div>
    <div class="close-btn w-[50px] h-[50px] absolute top-[50%] left-[0%] rotate-[90deg] pt-[10px] box-border">C</div>
  </div>
  <div :class="['content-pannel font-size-9 bg-gray', { 'spinned': spinned }]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi aspernatur dolor minus ipsam laboriosam consectetur modi molestiae soluta reiciendis! Porro eaque minus beatae laborum exercitationem voluptates ut assumenda architecto.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aspernatur facilis omnis cumque, a molestias ab vel praesentium quo velit dolorum, sint voluptatum? Repellendus, magni eaque praesentium ullam quaerat esse.
  </div>
  <div :class="['menu w-fit', { 'spinned': spinned }]">
    <div class="item">AAAAA</div>
    <div class="item">BBBBB</div>
    <div class="item">CCCCC</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const spinned = ref(false)
</script>

<style scoped lang="scss">
.turntable {
  transition: all 0.5s ease;
  z-index: 2;
  &.spinned {
    transform: rotate(-90deg);
  }
}
.content-pannel {
  transition: all 0.5s ease;
  transform-origin: 0% 0%;
  &.spinned {
    transform: rotate(-30deg);
  }
}
.menu {
  transition: all 0.5s ease;
  &.spinned {
    @for $i from 1 through 3 {
      .item:nth-child(#{$i}) {
        transform: translateX($i * 20px);
      }
    }
  }
}
</style>
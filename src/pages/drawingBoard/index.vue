<template>
  <canvas
    ref="cvs"
    id="cvs"
    class="w-[600px] h-[300px] rounded-[14px] bg-white"></canvas>
  <div class="tool-box">
    <div class="btn size-btn" @click="changeSize(-1)">-</div>
    <input v-model.number="size" type="number">
    <div class="btn size-btn" @click="changeSize(1)">+</div>
    <input v-model="color" type="color">
    <div class="btn reset-btn">重置</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { useMousePressed, useMouseInElement } from '@vueuse/core'

const cvs = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D | null>()
const size = ref(10)
const color = ref('#000000')
const lineX = ref(0)
const lineY = ref(0)
const { pressed } = useMousePressed()
const { elementX, elementY, isOutside } = useMouseInElement(cvs)

watchEffect(() => {
  if (!pressed.value) {
    lineX.value = -1
    lineY.value = -1
  }
  if (!ctx.value || !pressed.value || isOutside.value) return
  draw()
})

function changeSize(step:number) {
  size.value = Math.max(1, size.value + step)
}
function draw() {
  if (!ctx.value) return
  // const pixelRatio = window.devicePixelRatio
  const cvsRatio = 600 / 300
  const x = elementX.value / cvsRatio
  const y = elementY.value / cvsRatio

  drawCircle(x, y)
  drawLine(x, y)
}
function drawCircle(x:number, y:number) {
  if (!ctx.value) return
  ctx.value.beginPath()
  ctx.value.arc(x, y, size.value, 0, Math.PI * 2)
  ctx.value.fillStyle = color.value
  ctx.value.fill()
}
function drawLine(x:number, y:number) {
  if (!ctx.value || lineX.value < 0 || lineY.value < 0) return

  ctx.value.beginPath()
  ctx.value.moveTo(lineX.value, lineY.value)
  ctx.value.lineTo(x, y)
  ctx.value.strokeStyle = color.value
  ctx.value.lineWidth = size.value * 2
  ctx.value.stroke()
  lineX.value = x
  lineY.value = y
}

onMounted(() => {
  ctx.value = cvs.value?.getContext('2d')
})
</script>

<style scoped lang="scss">
#cvs {
  border: 4px solid orange;
}
.tool-box {
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    padding: 4px 8px;
    border: 1px solid gray;
    border-radius: 4px;
    cursor: pointer;
  }
  input {
    width: 50px;
    margin: 0 10px;
  }
}
</style>
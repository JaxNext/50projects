<template>
  <button @click="addNoti">弹出通知</button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

function addNoti() {
  const id = Date.now()
  const noti = document.createElement('div')
  noti.className = 'noti-bar'
  noti.innerHTML = `${id} ${Math.random()}`
  const notiBox = document.querySelector('.noti-box')
  notiBox?.prepend(noti)
  setTimeout(() => {
    notiBox?.removeChild(noti)
  }, 3000)
}

onMounted(() => {
  let notiBox = document.querySelector('.noti-box')
  if (!notiBox) {
    notiBox = document.createElement('div')
    notiBox.className = 'noti-box'
    document.body.appendChild(notiBox)
  }
})
</script>

<style lang="scss">
.noti-box {
  position: fixed;
  right: 0;
  bottom: 0;
  .noti-bar {
    padding: 4px 10px;
    background-color: #fff;
    margin: 16px;
    border-radius: 6px;
    color: orange;
  }
}
</style>
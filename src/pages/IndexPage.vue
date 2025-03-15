<template>
  <q-page class="menu-page flex flex-center bg-white">
    <div class="menu-container">
      <h1 class="menu-title">Puck View V1.0</h1>
      <q-icon class="menu-button" name="play_arrow" size="5rem" @click="goToPlay" />
      <q-icon class="menu-button" name="settings" size="4rem" @click="goToSettings" />
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPlay() {
  router.push('/puckMover')
}

function goToSettings() {
  console.log('Go to settings')
  router.push('/settings')
}
</script>

<style scoped>
.menu-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.menu-container {
  text-align: center;
}

.menu-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.menu-button {
  display: block;
  margin: 1rem auto;
  width: 200px;
  font-size: 1.2rem;
}
</style>

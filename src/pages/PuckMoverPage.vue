<template>
  <q-page class="flex flex-center bg-white">
    <PuckMover />
    <q-btn class="back-to-menu-button" label="Menu" color="primary" size="sm" @click="goToMenu" />
  </q-page>
</template>

<script setup>
import PuckMover from '../components/puckMover.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToMenu() {
  router.push('/') // Navigates back to the menu page
}
</script>

<style scoped>
.back-to-menu-button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
</style>

<template>
  <q-page class="menu-page flex flex-center bg-white">
    <div class="menu-container">
      <h1 class="menu-title">Puck View</h1>
      <div class="menu-buttons">
        <q-icon
          class="menu-button"
          name="play_arrow"
          size="5rem"
          @click="router.push('/puckMover')"
        />
        <q-icon class="menu-button" name="help" size="4rem" @click="router.push('/instructions')" />
        <q-icon class="menu-button" name="settings" size="4rem" @click="router.push('/settings')" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.menu-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.menu-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.menu-container {
  text-align: center;
}

.menu-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.menu-button {
  display: block;
  margin: 1rem auto;
  width: 200px;
  font-size: 1rem;
}
</style>

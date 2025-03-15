<template>
  <q-page class="settings-page flex flex-center bg-white">
    <div class="settings-container">
      <h1 class="settings-title">Settings</h1>
      <div class="settings-options">
        <!-- Button to open the puck speed dialog -->
        <q-btn
          outline
          class="settings-button"
          color="primary"
          label="Puck Speed"
          @click="isPuckSpeedDialogOpen = true"
        />
        <!-- Back to Menu Button -->
        <q-btn
          outline
          class="settings-button"
          label="Back to Menu"
          color="primary"
          @click="goToMenu"
        />
      </div>
    </div>

    <!-- Puck Speed Dialog -->
    <q-dialog v-model="isPuckSpeedDialogOpen">
      <q-card class="dialog-container">
        <q-card-section>
          <q-card-title class="text-h6">Puck Speed</q-card-title>
        </q-card-section>
        <q-card-section>
          <q-slider v-model="puckSpeed" marker-labels :min="1" :max="6" />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn @click="savePuckSpeed" flat label="Save" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { PuckStore } from '../stores/puckVueStore.js'

const router = useRouter()

// Local state
const isPuckSpeedDialogOpen = ref(false)
const puckSpeed = ref(1)
const store = PuckStore()

// Watchers
watch(puckSpeed, (newSpeed, oldSpeed) => {
  console.log(oldSpeed)
  store.setPuckSpeed(newSpeed)
})

// Functions
function goToMenu() {
  router.push('/') // Navigate back to the menu page
}
function savePuckSpeed() {
  console.log('Puck Speed:', puckSpeed.value)
  store.setPuckSpeed(puckSpeed.value)
}
</script>

<style scoped>
.settings-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.settings-container {
  text-align: center;
}

.settings-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.settings-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.settings-button {
  width: 200px;
  font-size: 1.2rem;
}

.dialog-container {
  padding: 20px;
  text-align: center;
  background: white;
  border-radius: 8px;
  min-width: 300px;
}

.dialog-button {
  margin-top: 20px;
}
</style>

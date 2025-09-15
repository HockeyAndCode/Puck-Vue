<template>
  <q-page class="flex flex-center bg-white">
    <div class="relative-container">
      <!-- Puck element dynamically styled -->
      <div
        class="puck"
        :style="{
          top: puckPosition.y + 'vh',
          left: puckPosition.x + 'vw',
          width: puckSize + 'vw',
          height: puckSize + 'vw',
          backgroundColor: puckColor,
        }"
      ></div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { PuckStore } from '../stores/puckVueStore.js'

const positions = [
  { x: 10, y: 10 }, // Top Left
  { x: 50, y: 10 }, // Top Middle
  { x: 90, y: 10 }, // Top Right
  { x: 90, y: 90 }, // Bottom Right
  { x: 10, y: 90 }, // Bottom Left
]

const puckPosition = ref({ x: 20, y: 15 })
const store = PuckStore()

// Computed properties to get puck settings from the store
const puckSpeed = computed(() => store.getPuckSpeed)
const puckSize = computed(() => store.getPuckSize) // Dynamically get puck size
const puckColor = computed(() => store.getPuckColor) // Dynamically get puck color

function movePuck() {
  const newIndex = Math.floor(Math.random() * positions.length)
  const newPosition = positions[newIndex]

  const shouldCrossover = Math.random() < 0.3 // 30% chance of crossover

  if (shouldCrossover) {
    const crossoverIndex = Math.floor(Math.random() * positions.length)
    const crossoverPosition = positions[crossoverIndex]

    puckPosition.value = crossoverPosition
    setTimeout(() => {
      puckPosition.value = newPosition
    }, 300)
  } else {
    puckPosition.value = newPosition
  }
  const speed = puckSpeed.value * 1000
  setTimeout(movePuck, speed)
}

onMounted(() => {
  movePuck()
})
</script>

<style scoped>
.relative-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
  border: 2px solid black;
  overflow: hidden;
}

.puck {
  position: absolute;
  border-radius: 50%;
  transition:
    top 0.3s ease-in-out,
    left 0.3s ease-in-out;
}
</style>

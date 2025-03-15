<template>
  <q-page class="flex flex-center bg-white">
    <div class="relative-container">
      <div
        class="puck"
        :style="{
          top: puckPosition.y + 'vh',
          left: puckPosition.x + 'vw',
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
  { x: 90, y: 90 }, // Bottom Right (updated y value)
  { x: 10, y: 90 }, // Bottom Left (updated y value)
]

const puckPosition = ref({ x: 20, y: 15 })
const store = PuckStore()
const puckSpeed = computed(() => store.getPuckSpeed)

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
  width: 2vw;
  height: 2vw;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  transition:
    top 0.3s ease-in-out,
    left 0.3s ease-in-out;
}
</style>

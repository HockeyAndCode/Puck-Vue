<template>
  <q-page class="flex flex-center bg-white">
    <div class="relative-container">
      <div
        class="puck"
        :style="{
          top: puckPosition.y + 'px',
          left: puckPosition.x + 'px',
        }"
      ></div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const positions = [
  { x: 100, y: 100 }, // Top Left
  { x: 500, y: 100 }, // Top Middle
  { x: 900, y: 100 }, // Top Right
  { x: 900, y: 500 }, // Bottom Right
  { x: 100, y: 500 }, // Bottom Left
]

const puckPosition = ref({ x: 200, y: 150 })

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function movePuck() {
  const newIndex = Math.floor(Math.random() * positions.length)
  const newPosition = positions[newIndex]

  // Decide whether to perform a quick crossover move
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

  setTimeout(movePuck, getRandomTime(4000, 5000)) // 4 to 5 seconds
}

onMounted(() => {
  movePuck()
})
</script>

<style scoped>
.relative-container {
  position: relative;
  width: 1000px;
  height: 600px;
  background-color: white;
  border: 2px solid black;
}

.puck {
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  transition:
    top 0.3s ease-in-out,
    left 0.3s ease-in-out;
}
</style>

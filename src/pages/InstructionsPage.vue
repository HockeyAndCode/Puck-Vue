<template>
  <q-page class="instructions-page flex flex-center bg-white">
    <div class="instructions-container">
      <h1 class="instructions-title">Instructions</h1>
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            arrows
            height="180px"
            class="bg-primary text-white shadow-1 rounded-borders instructions-carousel"
          >
            <!-- Slide 1 -->
            <q-carousel-slide name="1" class="column no-wrap flex-center">
              <q-icon name="sports_hockey" size="56px" />
              <div class="q-mt-md text-center">
                <p>
                  Welcome to Puck View, the hockey stick-handling trainer! The puck will move to
                  different spots on the screen. Your job is to stick handle where the puck is.
                </p>
              </div>
            </q-carousel-slide>

            <!-- Slide 2 -->
            <q-carousel-slide name="2" class="column no-wrap flex-center">
              <div class="q-mt-md text-center">
                <p>
                  The puck moves to five positions: Left, Center, Right, Behind Left, and Behind
                  Right. As the puck moves, you should stick handle to the corresponding position
                  while keeping your body centered. Imagine your body is in the center of the
                  screen, and the puck moves around you.
                </p>
              </div>
            </q-carousel-slide>

            <!-- Slide 3 -->
            <q-carousel-slide name="3" class="column no-wrap flex-center">
              <q-icon name="refresh" size="56px" />
              <div class="q-mt-md text-center">
                <p>
                  Sometimes the puck will move to one spot and then back again. This is a crossover
                  move. You should stick handle to the first position and then quickly move to the
                  second position when the puck returns.
                </p>
              </div>
            </q-carousel-slide>

            <!-- Slide 4 -->
            <q-carousel-slide name="4" class="column no-wrap flex-center">
              <q-icon name="visibility" size="56px" />
              <div class="q-mt-md text-center">
                <p>
                  The goal is to keep your head up while stick handling. This means you should not
                  look down at your puck. Instead, focus on the puck's movement on the screen and
                  mimick it.
                </p>
              </div>
            </q-carousel-slide>

            <!-- Slide 5 -->
            <q-carousel-slide name="5" class="column no-wrap flex-center">
              <q-icon name="play_arrow" size="56px" />
              <div class="q-mt-md text-center">
                <p>
                  Press the play button to start training. The puck will begin moving, and you can
                  practice your stick handling skills. Remember to keep your head up and follow the
                  puck's movement on the screen.
                </p>
              </div>
            </q-carousel-slide>

            <!-- Slide 6 -->
            <q-carousel-slide name="6" class="column no-wrap flex-center">
              <q-icon name="settings" size="56px" />
              <div class="q-mt-md text-center">
                <p>
                  Press the settings button to adjust the puck speed, size, and color. You can
                  customize your training experience to suit your preferences.
                </p>
              </div>
            </q-carousel-slide>
          </q-carousel>

          <q-btn
            outline
            class="back-button"
            label="Back to Menu"
            color="primary"
            @click="goToMenu"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const slide = ref('1') // Default to the first slide

function goToMenu() {
  router.push('/')
}
</script>

<style scoped>
.instructions-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.instructions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.instructions-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.instructions-carousel {
  margin-top: 20px;
}

.visualization-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.position-circle {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}

.body-circle {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.position-circle.top-left {
  top: 10%;
  left: 10%;
}

.position-circle.top-center {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.position-circle.top-right {
  top: 10%;
  right: 10%;
}

.position-circle.bottom-left {
  bottom: 10%;
  left: 10%;
}

.position-circle.bottom-right {
  bottom: 10%;
  right: 10%;
}

.back-button {
  margin-top: 20px;
}
</style>

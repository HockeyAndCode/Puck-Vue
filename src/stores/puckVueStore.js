import { defineStore } from 'pinia'

export const PuckStore = defineStore('puckStore', {
  state: () => ({
    // puck variables
    puckSpeed: 5,
  }),
  getters: {
    getPuckSpeed: (state) => {
      return state.puckSpeed
    },
  },
  actions: {
    setPuckSpeed(speed) {
      this.puckSpeed = speed
    },
  },
})

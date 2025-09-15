import { defineStore } from 'pinia'

export const PuckStore = defineStore('puckStore', {
  state: () => ({
    // puck variables
    puckSpeed: 4, // default puck speed
    puckSize: 2, // default puck size
    puckColor: '#000000', // default puck color
  }),
  getters: {
    getPuckSpeed: (state) => {
      return state.puckSpeed
    },
    getPuckSize: (state) => {
      return state.puckSize
    },
    getPuckColor: (state) => {
      return state.puckColor
    },
  },
  actions: {
    setPuckSpeed(speed) {
      this.puckSpeed = speed
    },
    setPuckSize(size) {
      this.puckSize = size
    },
    setPuckColor(color) {
      this.puckColor = color
    },
    resetPuck() {
      this.puckSpeed = 4
      this.puckSize = 2
      this.puckColor = '#000000'
    },
    updatePuck(puck) {
      this.puckSpeed = puck.speed || this.puckSpeed
      this.puckSize = puck.size || this.puckSize
      this.puckColor = puck.color || this.puckColor
    },
  },
})

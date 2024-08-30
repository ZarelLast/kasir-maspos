// stores/counter.js
import { defineStore } from 'pinia'

export const useModalStore = defineStore({
  id: 'modal',
  state: () => {
    return { 
      active: false 
    }
  }, 
  actions: {
    setStats() {
      this.active = !this.active
    },
  },
})
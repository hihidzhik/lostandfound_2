import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      things: [],
    }
  },
  actions: {
    increment() {
      this.count++
    },
    addNewLostedThing(item) {
      this.things.push(item);
      
    }
  },
})


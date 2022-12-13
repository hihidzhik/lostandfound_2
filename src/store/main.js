import { defineStore } from 'pinia'
import { vModelText } from 'vue';

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      lostedThings: [],
      foundThings:[],

    }
  },
  actions: {
    increment() {
      this.count++
    },
    addNewLostedThing(newLostThing) {
      this.lostedThings.push(newLostThing.value);
      
    },
    addNewFoundThing(newFoundThing) {
      this.foundThings.push(newFoundThing.value);
      
    },
  },
})


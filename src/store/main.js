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
      console.log(newLostThing.value);
      console.log(JSON.parse(JSON.stringify(this.lostedThings)));
      this.lostedThings.push(newLostThing.value);
      console.log(JSON.parse(JSON.stringify(this.lostedThings)));
    },
    addNewFoundThing(newFoundThing) {
      this.foundThings.push(newFoundThing.value);
      localStorage.setItem('found',foundThings)
      
    },
  },
})


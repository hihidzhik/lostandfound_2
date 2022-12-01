import { defineStore } from 'pinia'
import { vModelText } from 'vue';

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      things: ['1','2',],
      newLostThing: '',
    }
  },
  actions: {
    increment() {
      this.count++
    },
    addNewLostedThing() {
      this.things.push(this.newLostThing);
      this.newLostThing =''
      console.log();
    },
    inputChangeHandler(event){
      console.log(event.target.value)
      this.newLostThing=event.target.value
    }
  },
})


import { defineStore } from 'pinia'
import { vModelText } from 'vue';

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      things: [],
      thingsDescription: [],
      newLostThing: '',
      description: '',

    }
  },
  actions: {
    increment() {
      this.count++
    },
    addNewLostedThing(newLostThing) {
      console.log(newLostThing.value);
      this.things.push(newLostThing.value);
      // this.newLostThing =''
      // this.thingsDescription.push(this.description);
      // this.description=''
      
    },
    addNewDesc() {
      this.thingsDescription.push(this.description);
      this.description=''
      console.log();
    },
    inputChangeHandler(event){
      console.log(event.target.value)
      this.newLostThing=event.target.value

    },
    inputDesc(event){
      console.log(event)
      this.description=event
    },
  },
})


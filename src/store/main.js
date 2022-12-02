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
    addNewLostedThing() {
      this.things.push(this.newLostThing);
      this.newLostThing =''
      console.log();
      this.thingsDescription.push(this.description);
      this.description=''
      console.log();
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


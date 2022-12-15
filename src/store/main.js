import { defineStore } from 'pinia'
import { vModelText } from 'vue';

const saveLostedThings = (data) => {
  localStorage.setItem('lost', JSON.stringify(data));
}

const saveFoundThings =(data) => {
  localStorage.setItem('found', JSON.stringify(data))
}

const loadFoundThing = () => {
  return JSON.parse(localStorage.getItem('found'));
}

const loadLostedThing = () => {
  return JSON.parse(localStorage.getItem('lost'));
}

export const useStore = defineStore('main', {
  state() {
    return {
      count: 0,
      lostedThings: loadLostedThing(),
      foundThings: loadFoundThing(),

    }
  },
  actions: {
    addNewLostedThing(newLostThing) {
      this.lostedThings.push(newLostThing.value);
      saveLostedThings(this.lostedThings);
    },
    addNewFoundThing(newFoundThing) {
      this.foundThings.push(newFoundThing.value);
      saveFoundThings(this.foundThings);
    },
  },
})


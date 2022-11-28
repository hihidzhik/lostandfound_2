<script setup>
import { computed } from '@vue/reactivity';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

watch(() => {
  console.log(router.currentRoute.value.name)
})

const currentRouteName = computed(() => {
  return router.currentRoute.value.name;
})
</script>

<template>
  
  <!--<div>asdasdasdasdasdasdasd</div>
  <div>cr - {{currentRouteName}}</div>-->
  <router-view></router-view>
</template>

<style scoped>
</style>

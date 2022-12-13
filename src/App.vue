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
    <div class="header">
        <div>
            <router-link class="header_link" to="/"><img class="header_icon" src="./assets/homeIcon.png"/></router-link>
        </div>
        <span class="logo_text">LOSTandFOUND</span>
        <div class="header_links">
            <router-link class="header_link" to="/list_found">СПИСОК НАХОДОК</router-link>
            <router-link class="header_link" to="/list_lost">СПИСОК ПОТЕРЬ</router-link>
        </div>
    </div>
    <router-view></router-view>
</template>

<style>
    body, #app {
        width: 100%;
        height: 100%; 
    }

    .header {
        display: flex;
        background: rgb(34, 32, 32);
        padding: 35px;
        width: 100%;
        height: 50px;
        box-shadow: 0 4px 16px #ccc;
        color: white;
        justify-content:space-between;
        align-items: center;
        box-sizing: border-box;
    }
    .header_links {
        display: flex;
        width: 400px;
        justify-content: space-around;
        text-decoration: none;
    }
    .header_link {
        color: white;
        font-size: 17px;
        text-decoration: none;
    }
    .logo_text{
        font-size: 30px;
    }
    .header_icon{
        height: 50px;
        width: 50px;
    }
    
</style>

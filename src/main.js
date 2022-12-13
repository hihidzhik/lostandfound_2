import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import IndexComponent from './routes/index.vue'
import LostComponent from './routes/lost.vue'
import LfComponent from './routes/list_found.vue'
import LlComponent from './routes/list_lost.vue'

const pinia = createPinia()

const routes = [
  { path: '/', name: 'index', component: IndexComponent },
  { path: '/lost', name: 'lost', component: LostComponent },
  { path: '/list_found', name: 'list_found', component: LfComponent },
  { path: '/list_lost', name: 'list_lost', component: LlComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(pinia).use(router).mount('#app')

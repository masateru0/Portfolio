import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '@/Pages/TopPage.vue'
import ProfilePage from '@/Pages/ProfilePage.vue'

const routes = [
    {name: 'Top', component:TopPage, path: '/'},
    {name: 'Profile', component: ProfilePage, path: '/profile'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
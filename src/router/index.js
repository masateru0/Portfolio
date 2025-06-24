import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '@/Pages/TopPage.vue'
import ProfilePage from '@/Pages/ProfilePage.vue'

const routes = [
    { path: '/', component:TopPage },
    { path: '/profile', component: ProfilePage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }
        return { top: 0 }
    }
})

export default router
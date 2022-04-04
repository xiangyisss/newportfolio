import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home/Home.vue'
import About from '../pages/About/About.vue'
import Projects from '../pages/Projects/Projects.vue'
import Contact from '../pages/Contact/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
})

export default router

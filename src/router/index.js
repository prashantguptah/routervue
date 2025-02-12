import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TryComponent from '../components/TryComponent.vue'
import NewComponent from '../components/ChildComponent.vue'
import AboutView from '@/views/AboutView.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserContact from '@/components/UserContact.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import store from '@/store'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
     path:"/login", name:"LoginView", component: LoginView
    },
    {
      path: "/profile",
      name: "ProfileView",
      component: ProfileView,
      beforeEnter: (to, from, next) => {
        if (!store.state.user) {
          next("/login");
        } else {
          next();
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      children:[
        {path: 'profile', component: UserProfile},
        {path: 'contact', component: UserContact},
      ]
      
    },{
      path: '/foo',
      name: 'TryComponent',
      component: TryComponent
    },
    {
      path: '/foo/:id',
      name: 'NewComponent',
      component: NewComponent
    },
    
  ],
})

export default router

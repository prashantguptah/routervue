import { createRouter, createWebHistory } from "vue-router";

import TryComponent from "../components/TryComponent.vue";
import NewComponent from "../components/ChildComponent.vue";
import AboutView from "../views/AboutView.vue";
import UserProfile from "@/components/UserProfile.vue";
import UserContact from "../components/UserContact.vue";
import ProfileView from "../views/ProfileView.vue";
import HomeView from "../views/HomeView.vue";
import store from "@/store";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      component: AboutView,
      children: [
        { path: "profile", component: UserProfile },
        { path: "contact", component: UserContact },
      ],
    },
   // forloginapi assignment
    {
      path: "/login",
      name: "about",
      component: AboutView,
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView,
      beforeEnter: (to, from, next) => {
        if (!store.state.loggedin) {
          next("/login");
        } else {
          next();
        }
      }
    }
    

    ,
    {
      path: "/foo",
      name: "TryComponent",
      component: TryComponent,
    },
    {
      path: "/foo/:id",
      name: "NewComponent",
      component: NewComponent,
    },
  ],
});

export default router;

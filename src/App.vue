<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<template>
  <div class="app">
    <header>
      <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/foo">click</RouterLink>
      </nav>
    </div> -->
    
    </header>
    <div class="wrapper">
    <nav class="flex items-center justify-between bg-yellow-500 text-white shadow-md">
    
      <router-link to="/" class="text-lg text-purple-600 hover:text-gray-200 px-8">
        VUE
      </router-link>

      
      <div class="flex space-x-4">
        <router-link v-if="!user" to="/login"  class="bg-white mx-4 text-black font-medium px-4 py-2 rounded-lg hover:bg-amber-200 shadow ">Login</router-link>
        <router-link v-if="user" to="/" @click="logout"  class="bg-white mx-4 text-black font-medium px-4 py-2  hover:bg-amber-200 rounded-lg shadow">
          Logout
        </router-link>
      </div>
    </nav>
  </div>

    <router-view />
  </div>
</template>

<style scoped>
.wrapper{
  background-color: yellow;
  width: 100vw;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 0rem;
  }
}
</style>

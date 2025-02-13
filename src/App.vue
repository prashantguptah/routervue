<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <!-- <header> -->
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/foo">click</RouterLink>
      </nav>
    </div> -->

    <header class="bg-gray-100 p-3 px-5">
      <nav class="h-[45px] flex items-center justify-end space-x-2 text-black">
        <router-link
          to="/"
          class="hover:text-black   transition duration-300 w-[86px] flex justify-center items-center "
          > <i
            class="fa-solid fa-globe h-[24px] w-[24px] mt-2 mx-[35px]"
            style="color: #000000"
          ></i></router-link
        >
       
        <router-link
          to="/register"
          class="hover:text-black  transition duration-300 w-[86px] flex justify-center items-center "
          >SignUp</router-link
        >
        <span>|</span>
        <router-link
          to="/login"
          class="hover:text-black hover:bg-white transition duration-300 bg-[rgba(174,214,179,1)] h-full flex justify-center gap-2 px-4 
          py-2"
        >
          <span class="h-full flex justify-center items-center">Login  <i
            class="fa-solid fa-arrow-right text-[#101114] -rotate-45 text-lg mx-[10px]"
          ></i></span>
         
        </router-link>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

<template>
  <div class="container">
    <div class="text-center p-6 bg-purple-500 h-[200px] flex items-center justify-center text-white shadow-md">
  <h2 class="text-3xl font-bold">Login Page</h2>
</div>


<div class="flex flex-col text-left items-center mt-[30px]">

  <div>
    <label for="username" class="mb-4 text-lg text-black">Username</label>
    <br>
    
  <input
    type="text"
    v-model="username"
    placeholder="Username"
    class="w-[350px] p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
  />
  <br>
  <br>
  
  <label for="password" class="mb-4 text-lg text-black">Password</label>
  <br>
  <input
    type="password"
    v-model="password"
    placeholder="Enter password"
    class="w-[350px] p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
  />
 <br>
  
  <button
    @click="handleLogin"
    class="w-[80px] bg-gray-100 text-black py-3 rounded-lg"
  >
    Login
  </button>

  </div>
  
  
</div>


  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),

    handleLogin() {
      if (this.username) {
        this.login({ username: this.username });
        this.$router.push("/profile");
      }
    },
  },
};
</script>

<style scoped>


</style>

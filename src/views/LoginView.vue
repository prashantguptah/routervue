<template>
    <div class="container">
      <h2>Login</h2>
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" placeholder="Enter password">
      <button @click="handleLogin">Login</button>
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
  .container {
    text-align: center;
    margin-top: 50px;
  }
  input {
    padding: 10px;
    margin: 10px;
    width: 200px;
  }
  button {
    padding: 10px;
    cursor: pointer;
  }
  </style>
  
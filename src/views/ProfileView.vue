<template>
    <div class="container">
      <h1 v-if="user">Welcome, {{ user.username }}</h1>
      <h1 v-else>Loading...</h1>
    </div>
  </template>
  
  <script>
  import { mapState,} from "vuex";
  
  export default {
    computed: {
      ...mapState(["user"]),
    },
   
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 50px;
  }
  nav {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
  nav a {
    margin-right: 20px;
    text-decoration: none;
    font-size: 18px;
  }
  </style>
  
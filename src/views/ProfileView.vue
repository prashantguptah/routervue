<template>
    <h1>{{ getUsername }} You have logged in</h1>
  
    <div class="card">
      <div>
        <img :src="getImage" alt="" />
      </div>
      <div>
        <h3>Username : {{ getUsername }}</h3>
        <h3>First Name : {{ getFirstName }}</h3>
        <h3>Last Name : {{ getLastName }}</h3>
        <h3>Gender : {{ getGender }}</h3>
        <h3>Email : {{ getEmail }}</h3>
        <button @click="handleLogout">Logout</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  
  export default {
    
  
    computed: {
      ...mapGetters([
        "getUserInfo",
        "getEmail",
        "getUsername",
        "getImage",
        "getFirstName",
        "getLastName",
        "getGender",
      ]),
    },
    methods: {
      handleLogout(){
        this.$router.push("/")
      }
    },
  };
  </script>
  
  
  <style scoped>
   .card{
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1.2rem;
    
   }
  </style>
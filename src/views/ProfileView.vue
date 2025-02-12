<template>
    <div >
      <h1 v-if="user" class="text-4xl font-bold text-center mt-10">Welcome, {{ user.username }}</h1>

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
 
 
 
  </style>
  
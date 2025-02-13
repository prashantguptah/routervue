<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" :disabled="loading">Register</button>
      </form>
  
      <div v-if="loading">
        <p>Loading...</p>
      </div>
  
      <div v-if="successMessage">
        <p style="color: green;">{{ successMessage }}</p>
      </div>
  
      <div v-if="errorMessage">
        <p style="color: red;">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    computed: {
      ...mapState(['loading', 'successMessage', 'errorMessage']),
    },
    methods: {
      ...mapActions(['register', 'setSsMessage']),
      handleRegister() {
        this.register({ username: this.username, password: this.password });
        setTimeout(() => {
            this.$router.push('/login')
             this.setSsMessage("")
        }, 3000);
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
  
  input, button {
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
  }
  </style>
  
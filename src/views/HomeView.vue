<template>
  <div class="container">
    <nav>
      <router-link v-if="!user" to="/login">Login</router-link>
      <router-link v-if="user" to="/" @click="logout">Logout</router-link>
    </nav>
    
    <h1>Home Page</h1>
  </div>

</template>

<script>

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

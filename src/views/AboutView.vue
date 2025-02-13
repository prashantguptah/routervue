<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>

    <nav>
       <RouterLink to="/about/profile">Profile</RouterLink>
       <RouterLink to="/about/contact">Contact</RouterLink>
    </nav>
    <RouterView></RouterView>
  </div> -->
  <div class="login">
    <h1>This is a Login page</h1>
    <LoginForm/>
  </div>
</template>

<script>

import LoginForm from "../components/LoginForm.vue"

export default{

components: {
  LoginForm
}

}
</script>

<style>

.login{
  display: flex;
  flex-direction: column;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

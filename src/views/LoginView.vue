<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>

    <nav>
       <RouterLink to="/about/profile">Profile</RouterLink>
       <RouterLink to="/about/contact">Contact</RouterLink>
    </nav>
    <RouterView></RouterView>
  </div> -->
  <div class="login bg-[rgba(245,242,235,1)] h-screen">
    <div class="flex items-center justify-around px-12 space-x-2">
     
  
      <div
        class=" flex items-center justify-center max-w-md"
      >
        <LoginForm />
      </div>

     
      <div class="hidden md:block">
        <img
          src="../assets/formimg.png"
          alt="Form Image"
          class="w-[598.8px] h-[600px] rounded-lg "
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style>
.login {
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



<template>
  <main>
      <!-- <h1>Home Page</h1> -->
  </main>

  <div>
    <h1>Home Page</h1>
    <RegisterForm />

    
  </div>
</template>


<script>
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'HomeView',
  components: {
    RegisterForm,
  }
}

</script>

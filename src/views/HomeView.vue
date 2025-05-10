<template>
  <div >
   
    
    <h1 class="text-5xl font-extrabold text-center text-blue-700 mt-12">Home Page</h1>

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



</style>

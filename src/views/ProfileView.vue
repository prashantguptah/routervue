<template>
  <div class="flex justify-center items-center flex-col">
    <h1 class="text-[45px] m-[px]">{{ getUsername }} You have logged in</h1>

    <div class="border p-[20px] mt-8 rounded-2xl">
      <div>
        <img :src="getImage" alt="" />
      </div>
      <div>
        <h3 class="font-bold">Username : {{ getUsername }}</h3>
        <h3 class="font-bold">First Name : {{ getFirstName }}</h3>
        <h3 class="font-bold">Last Name : {{ getLastName }}</h3>
        <h3 class="font-bold">Gender : {{ getGender }}</h3>
        <h3 class="font-bold">Email : {{ getEmail }}</h3>
        <button @click="handleLogout" class="border px-3 py-2 mt-2 rounded-2xl bg-gray-200" >Logout</button>
      </div>
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
    handleLogout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1.2rem;
}
</style>

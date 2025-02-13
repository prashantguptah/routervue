<template>
  <div
    class="max-w-md mx-auto px-[52px] py-[20px] bg-white  shadow-md w-[480px] flex flex-col items-center h-[548px] rounded-[30px]"
  >
    <div>
      <div class="w-[265px] h-[123px] flex justify-center flex-col items-center gap-[8px]">
        <h2 class="text-2xl font-semibold text-center text-gray-800">
          Sign in
        </h2>
        <p class="text-center">
          Hey, Enter your details to login <br />
          to your account
        </p>
      </div>

      <form
        @submit.prevent="handleLogin"
        class="space-y-1 flex flex-col justify-left"
      >
        <!-- Username Input -->
        <div>
        
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter Email / Phone No"
            required
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Password Input -->
        <div>
         
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="passcode"
            required
            class="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="h-[20px] w-[376px] mt-[4px] mx-[8px]">
          <p class="text-[12px] text-gray-400">
            Don't have an account yet?
            <strong class="text-black">Register now!</strong>
          </p>
        </div>

        <!-- Submit Button -->
        <div class="flex flex-col justify-between items-center gap-[18px]">
          <button
            type="submit"
            :disabled="loading"
            class="w-full mt-4 py-2 px-4 bg-blue-200 text-white font-bold rounded-md disabled:bg-gray-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign in
          </button>
          <p class="text-center text-[16px]">--Or sign in with--</p>
          <div class="h-[40px] w-[376px] flex justify-center items-center  gap-[8px]">
            <div
              class="h-[40px] w-[100px] border-[1px] rounded-[40px]  flex justify-center items-center gap-[8px]"
            >
              <i class="fa-brands fa-google h-[20px] w-[20px]"></i>
              <span class="text-[13px] mb-1.5">Google</span>
            </div>
            <div
              class="h-[40px] w-[100px] border-[1px] rounded-[40px] flex justify-center items-center gap-[8px]"
            >
              <i class="fa-brands fa-apple h-[20px] w-[20px]"></i>
              <span class="text-[13px] mb-1.5">Apple</span>
            </div>
            <div
              class="h-[40px] w-[100px] border-[1px] rounded-[40px] flex justify-center items-center gap-[8px]"
            >
              <i class="fa-brands fa-facebook h-[20px] w-[20px]"></i
              ><span class="text-[13px] mb-1.5"> Facebook</span>
            </div>
            
          </div>
          <div class="h-[20px] w-[376px] mt-[4px] mx-[8px] flex justify-center">
          <p class=" h-[16px]   text-[13px]">
            Don't have an account yet?
            <strong class="text-black">Register now!</strong>
          </p>
        </div>
        </div>
      </form>

      <!-- Loading Indicator -->
      <div v-if="loading" class="mt-1 text-center text-gray-500">
        <p>Loading...</p>
      </div>

      <!-- Success Message -->
      <div v-if="successMessage" class="mt-1 text-center text-green-500">
        <p>{{ successMessage }}</p>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="mt-1 text-center text-red-500">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["loggedin", "loading", "successMessage", "errorMessage"]),
  },
  methods: {
    ...mapActions(["login", "setSsMessage"]),
    handleLogin() {
      this.login({ username: this.username, password: this.password });
    },
  },
  watch: {
    loggedin(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$router.push("/profile");
          this.setSsMessage("");
        }, 3000);
      }
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

input,
button {
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
}
</style>

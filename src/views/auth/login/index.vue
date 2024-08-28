<template>
  <div class="hidden sm:inline sm:absolute bg-white h-1/2 bottom-0 right-0 left-0"></div>
  <div
    class="rounded-lg bg-white p-12 absolute w-full bottom-0 sm:w-1/3 sm:inset-0 sm:mx-auto sm:top-1/4 sm:bottom-auto sm:shadow-[rgba(0,0,10,0.04)_4px_4px_4px_2px]">
    <div class="relaive ms:px-3 md:px-8 lg-12">
      <h1 class="font-semibold text-lg text-center">Login</h1>
      <form action="" @submit.prevent="login" class="pt-12 relative">
        <div class="mb-9">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
          <input v-model="formData.email" type="email" id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email" required>
        </div>
        <div class="mb-9 relative">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
          <input v-model="formData.password" :type="passwordFieldType" id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password" required>
          <span class="icon is-small is-right absolute top-9 right-4" @click="toggleShow">
            <i class="relative" :class="{ 'ri-eye-fill': showPassword, 'ri-eye-off-fill': !showPassword }"></i>
          </span>
        </div>
        <div class="w-full flex justify-center">
          <ButtonPrimary class="w-full sm:w-auto sm:px-10 sm:items-center" :type="'submit'">
            Login
          </ButtonPrimary>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  useAuthStore
} from "@/stores/auth.store.js"

export default {
  data() {
    return {
      authStore: useAuthStore(),
      showPassword: false,
      formData: {
        email: "",
        password: "",
      }
    }
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password'
    },
  },
  methods: {
    login() {
      this.authStore.login(this.formData)
    },
    toggleShow() {
      this.showPassword = !this.showPassword
    },
  }
}

</script>

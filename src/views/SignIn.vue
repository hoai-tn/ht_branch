<script setup>
import AuthForm from '@/components/base/AuthForm.vue';
</script>
<template>
  <AuthForm>
    <h3 class="text-3xl">Sign-In</h3>
    <form class="flex flex-col gap-y-3">
      <label class="block" for="email">Email</label>
      <input class="w-full" type="text" />
      <label class="block" for="password" >Password</label>
      <input class="w-full" type="password" />
      <button
        class="flex justify-center p-2 w-full bg-[#003953] rounded text-center font-bold text-white"
      >
        Sign in
      </button>
      <div>
        <input type="checkbox" name="keep-me" />
        <label for="keep-me">Keep me signed</label>
      </div>
    </form>
    <div>
      <div class="mt-8 text-gray-600 text-center">New to Zappos?</div>
      <router-link
        to="/sign-up"
        class="flex justify-center w-full p-2 mt-2 font-bold border-[3px] border-[#003953] rounded"
      >
        Create your HT account
      </router-link>
    </div>
  </AuthForm>
</template>

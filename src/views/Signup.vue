<script setup>
import AuthForm from '@/components/base/AuthForm.vue';
import router from '../routers';
import { useAuthStore } from '@/stores/auth';
import { reactive, ref } from 'vue';

const authStore = useAuthStore();

const rePassword = ref(null);
const message = ref(null);

let { form } = reactive({
  form: { email: '', password: '', rePassword: '', name: '' },
});

const onSignup = async () => {
  //   rePassword.value.setCustomValidity('does not match password');
  if (validateRePassword()) {
    try {
      await authStore.auth({ ...form }, false);
      router.push('/');
    } catch (error) {
      message.value = error;
    }
  }
};
const validateRePassword = () => {
  return form.password === form.rePassword;
};
</script>
<template>
  <AuthForm>
    <h3 class="text-3xl">Create account</h3>
    <form class="flex flex-col gap-y-3" v-on:submit.prevent="onSignup">
      <label class="block" for="email">Name</label>
      <input
        id="name"
        class="w-full"
        type="text"
        required
        v-model="form.name"
      />

      <label class="block" for="email">Email</label>
      <input
        id="email"
        class="w-full"
        type="email"
        required
        v-model="form.email"
      />

      <label class="block" for="password">Password</label>
      <input
        id="password"
        class="w-full"
        type="password"
        required
        v-model="form.password"
      />

      <label class="block" for="re-password">Re-enter password</label>
      <input
        id="re-password"
        class="w-full"
        type="password"
        required
        ref="rePassword"
        v-model="form.rePassword"
      />
      <small v-if="!validateRePassword()" class="text-[red]"
        >Password doesn't match</small
      >
      <button
        type="submit"
        class="flex justify-center p-2 w-full bg-[#003953] rounded text-center font-bold text-white"
      >
        Create your HT account
      </button>
    </form>
    <div class="flex flex-col gap-y-5 mt-5 text-xs">
      <div>
        Don't have an email address or need additional help? Don't worry! Give
        us a call at (800) 927-7671
      </div>
      <div>
        Registering means you agree to the Zappos terms of use and privacy
        policy
      </div>
      <div class="text-sm">
        Already have an account?
        <router-link class="color-[#4667df] border-b" to="/sign-in"
          >Sign in</router-link
        >
      </div>
    </div>
    <div v-if="message" class="text-[red]">{{ message }}</div>
  </AuthForm>
</template>

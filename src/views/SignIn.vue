<script setup>
import router from '../routers';
import AuthForm from '@/components/base/AuthForm.vue';
import { useAuthStore } from '@/stores/auth';
import { reactive, ref } from 'vue';
const { form } = reactive({ form: { email: '', password: '' } });

const authStore = useAuthStore();

const message = ref(null);

const onSignIn = async () => {
  try {
    await authStore.auth({ ...form }, true);
    router.push('/');
  } catch (error) {
    message.value = error;
  }
};
</script>
<template>
  <AuthForm>
    <h3 class="text-3xl">Sign-In</h3>
    <form class="flex flex-col gap-y-3" @submit.prevent="onSignIn">
      <label class="block" for="email">Email</label>
      <input class="w-full" v-model="form.email" type="email" required />
      <label class="block" for="password">Password</label>
      <input class="w-full" v-model="form.password" type="password" required />
      <button
        class="flex justify-center p-2 w-full bg-[#003953] rounded text-center font-bold text-white"
        type="submit"
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
    <div v-if="message" class="text-[red]">{{ message }}</div>
  </AuthForm>
</template>

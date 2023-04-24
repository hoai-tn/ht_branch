import { defineStore } from 'pinia';
import { signUp } from '../apis/user.js';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: null,
    user: null,
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.token || !!localStorage.getItem('profile');
    },
    getToken(state) {
      return state.token;
    },
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    async signUp(form) {
      try {
        const { data } = await signUp(form);
        localStorage.setItem(
          'profile',
          JSON.stringify({ token: data.token, data: data.result })
        );
        this.token = data.token;
        this.user = data.result;
      } catch (error) {
        throw error;
      }
    },
    clearAuth() {
      this.token = null;
      this.user = null;

      localStorage.removeItem('profile');
    },
  },
});

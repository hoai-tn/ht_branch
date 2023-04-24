import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: null,
    user: null,
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    getToken(state) {
      return state.token;
    },
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    setToken(token) {
      this.token = token;
      // store token in cookie
      document.cookie = `auth_token=${token};`;
    },
    setUser(user) {
      this.user = user;
    },
    clearAuth() {
      this.token = null;
      this.user = null;
      // clear token in cookie
      document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    },
  },
});

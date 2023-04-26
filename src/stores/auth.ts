import { defineStore } from 'pinia';
import { signUp, signIn, getUserFromGoogle } from '../apis/user.js';
import { useBagStore } from './bag.js';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    const profile = localStorage.getItem('profile') || '{}';
    const getSession = JSON.parse(profile);
    return {
      token: getSession?.token,
      user: getSession?.data,
    };
  },
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
    async authGoogle(token: string) {
      try {
        const bagStore = useBagStore();

        const { data } = await getUserFromGoogle(token);
        const user = {
          _id: data.sub,
          name: data.name,
          email: data.email,
          picture: data.picture,
        };

        localStorage.setItem(
          'profile',
          JSON.stringify({ token: token, data: user })
        );

        this.token = token;
        this.user = user;

        await bagStore.getProducts(user._id);
      } catch (error) {
        console.log(error);
      }
    },
    async auth(form: object, isSignIn: boolean) {
      try {

        const { data } = await (isSignIn ? signIn(form) : signUp(form));
        localStorage.setItem(
          'profile',
          JSON.stringify({ token: data.token, data: data.result })
        );
        this.token = data.token;
        this.user = data.result;

        const bagStore = useBagStore();
        await bagStore.getProducts(data.result._id);

      } catch (error) {
        throw error;
      }
    },
    logout() {
      const bagStore = useBagStore();
      this.token = '';
      this.user = '';
      bagStore.clearBag();
      localStorage.removeItem('profile');
    },
  },
});

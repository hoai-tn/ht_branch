import { defineStore } from 'pinia';
import {
  signUp,
  signIn,
  getUserFromGoogle,
  authGoogle,
  createShippingAddress,
  getShippingAddress,
} from '../apis/user.js';
import { useBagStore } from './bag.js';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    const profile = localStorage.getItem('profile') || '{}';
    const getSession = JSON.parse(profile);
    return {
      token: getSession?.token,
      user: getSession?.data,
      addressInfo:[] 
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

        const userFromGoogle = await getUserFromGoogle(token);
        const user = {
          id: userFromGoogle.data.sub,
          name: userFromGoogle.data.name,
          email: userFromGoogle.data.email,
          picture: userFromGoogle.data.picture,
        };
        const { data } = await authGoogle({ ...user });
        localStorage.setItem(
          'profile',
          JSON.stringify({ token: data.token, data: data.result })
        );

        this.token = token;
        this.user = data.result;
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
    async createShippingAddress(forn: Object) {
      
    },
    async getShippingAddress(id: string) {
      try {
        const { data } = await getShippingAddress(id);
        this.addressInfo = data.result;
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

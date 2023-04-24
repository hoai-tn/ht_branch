import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import New from '../views/New.vue';
import Sale from '../views/Sale.vue';
import Product from '../views/Product.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import Checkout from '../views/Checkout.vue';
import { useAppStore } from '../stores/app';
import { useAuthStore } from '../stores/auth';
const routes = [
  { path: '/', component: Home },
  { path: '/new', component: New },
  { path: '/sale', component: Sale },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
  {
    path: '/checkout',
    component: Checkout,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated) {
        next();
      } else {
        next('/sign-in');
      }
    },
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: Product,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach(() => {
  const appStore = useAppStore();
  appStore.onHideSideBar();
  appStore.onHideBagNav();
  appStore.onHideSignInModal();
});
export default router;

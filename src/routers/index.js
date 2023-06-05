import SignUp from '../views/SignUp.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import New from '../views/New.vue';
import Sale from '../views/Sale.vue';
import Product from '../views/Product.vue';
import SignIn from '../views/SignIn.vue';
import Checkout from '../views/Checkout.vue';
import Bag from '../views/Bag.vue'
import { useAppStore } from '../stores/app';
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/', component: Home },
  { path: '/new', component: New },
  { path: '/sale', component: Sale },
  {
    path: '/sign-in',
    component: SignIn,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/sign-up',
    component: SignUp,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/bag',
    component: Bag,
  },
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

router.beforeEach((to, from, next) => {
  const appStore = useAppStore();
  appStore.resetStore();

  const isAuthenticated = localStorage.getItem('profile');
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/sign-in');
    } else {
      next();
    }
  }
  if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (!isAuthenticated) {
      next();
    } else {
      next(`/`);
    }
  }
  next();
});

export default router;

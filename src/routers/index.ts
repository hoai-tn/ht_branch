import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import New from '../views/New.vue';
import Sale from '../views/Sale.vue';
import Product from '../views/Product.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/Signup.vue';
import { useAppStore } from '../stores/app';
const routes = [
  { path: '/', component: Home },
  { path: '/new', component: New },
  { path: '/sale', component: Sale },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
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
  appStore.onHideSignInModal();
});
export default router;

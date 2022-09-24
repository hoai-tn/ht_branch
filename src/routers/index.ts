import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import New from '../views/New.vue';
import Sale from '../views/Sale.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/new', component: New },
  { path: '/sale', component: Sale },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;

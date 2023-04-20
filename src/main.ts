import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Routers from './routers';
import { createPinia } from 'pinia';

/* import font awesome icon component */
/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* add some free styles */
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const pinia = createPinia();

library.add(faTwitter, faInstagram, faFacebook, faHeart, faXmark, faBars);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(Routers)
  .use(pinia)
  .mount('#app');

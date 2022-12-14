import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Routers from './routers';
/* import font awesome icon component */
/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* add some free styles */
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTwitter, faInstagram, faFacebook, faHeart);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(Routers)
  .mount('#app');

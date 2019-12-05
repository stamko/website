// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'ant-design-vue/dist/antd.css'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faSignInAlt,
  faDownload,
  faGlobeAmericas,
  faBars,
  faTasks,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faTimes,
  faChevronUp,
  faRedoAlt,
  faUsers,
  faComments,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  faFontAwesome,
  faAndroid,
  faApple,
  faFacebookF,
  faTwitter,
  faVk,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import VueScrollmagic from 'vue-scrollmagic'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
import '../firebase/';
import VueMoment from 'vue-moment'
import Moment from 'moment';
import {
  extendMoment
} from 'moment-range';
import 'moment/locale/ru'
import store from './store';
import {
  CollapsePlugin,
  VBScrollspyPlugin
} from 'bootstrap-vue'
Vue.use(CollapsePlugin)
import Antd from 'ant-design-vue'
Vue.use(VBScrollspyPlugin)
Vue.use(Antd)
const moment = extendMoment(Moment);
Vue.use(VueMoment, {
  moment
});
Vue.use(VueScrollmagic);
library.add(faSignInAlt, faDownload, faGlobeAmericas, faBars, faAndroid, faApple, faTasks, faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faFacebookF, faTwitter, faVk, faInstagram, faTimes, faRedoAlt, faUsers,
  faComments,
  faStar)
library.add(faFontAwesome)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>'
});
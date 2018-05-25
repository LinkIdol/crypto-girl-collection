// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueConfig from 'vue-config';
import VueLazyload from 'vue-lazyload';
import AsyncComputed from 'vue-async-computed';
import VueResource from 'vue-resource';
import * as config from '@/config';
import App from './App';
import store from './store';
import router from './router';
import i18n from './i18n';
import Buefy from 'buefy';

Vue.config.productionTip = false;

Vue.use(VueLazyload);
Vue.use(AsyncComputed);
Vue.use(vueConfig, config);
Vue.use(VueResource);
Vue.use(Buefy);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  components: { App },
  template: '<App/>',
});

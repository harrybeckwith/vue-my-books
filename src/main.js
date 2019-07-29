import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { store } from './store/index';

import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

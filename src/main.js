import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/Antd';

import './assets/icon/iconfont';
import * as api from '@/api/api';
import * as filters from '@/filters/index';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.prototype.$api = api;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

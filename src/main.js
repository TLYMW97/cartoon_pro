import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/Antd';

// import './assets/icon/iconfont';
import IconSvg from '../src/components/icon-svg/icon-svg.vue';
import * as api from '@/api/api';
import Verify from 'vue2-verify';
import * as filters from '@/filters/index';
import VueLazyload from 'vue-lazyload';
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
Vue.component('Verify', Verify);
Vue.component('IconSvg', IconSvg);
Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  loading: require('../src/assets/images/timg.gif'), //加载中图片，一定要有，不然会一直重复加载占位图
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {Input, Icon, Tag} from 'ant-design-vue';

Vue.config.productionTip = false;
Vue.component(Input.name, Input);
Vue.component(Icon.name, Icon);
Vue.component(Tag.name, Tag);
Vue.component(Input.Search.name, Input.Search);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

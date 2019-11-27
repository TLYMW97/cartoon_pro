import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {Input, Icon, Tag, Form, Select, Button,Rate,Avatar} from 'ant-design-vue';

Vue.config.productionTip = false;
Vue.component(Input.name, Input);
Vue.component(Icon.name, Icon);
Vue.component(Tag.name, Tag);
Vue.component(Input.Search.name, Input.Search);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Select.name, Select);
Vue.component(Select.Option.name, Select.Option);
Vue.component(Button.name, Button);
Vue.component(Avatar.name, Avatar);
Vue.component(Rate.name, Rate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue';
import {
  Input,
  Icon,
  Tag,
  Form,
  Select,
  Button,
  Rate,
  Avatar,
  Modal,
  Tabs,
  Spin,
  Pagination,
  message
} from 'ant-design-vue';
Vue.component(Input.name, Input);
Vue.component(Icon.name, Icon);
Vue.component(Tag.name, Tag);
Vue.component(Tabs.name, Tabs);
Vue.component(Pagination.name, Pagination);
Vue.component(Input.TextArea.name, Input.TextArea);
Vue.component(Tabs.TabPane.name, Tabs.TabPane);
Vue.component(Input.Search.name, Input.Search);
Vue.component(Input.Password.name, Input.Password);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Select.name, Select);
Vue.component(Select.Option.name, Select.Option);
Vue.component(Button.name, Button);
Vue.component(Avatar.name, Avatar);
Vue.component(Rate.name, Rate);
Vue.component(Modal.name, Modal);
Vue.component(Spin.name, Spin);
Vue.prototype.$message = message;

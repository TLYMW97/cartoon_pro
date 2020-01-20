import * as types from './mutation-types';
import { message } from 'ant-design-vue';
const mutations = {
  [types.SET_USER_INFO](state, user) {
    state.user = user;
  },
  [types.ERR_MSG](state, msg) {
    message.error(msg, 2);
  }
};
export default mutations;

import * as types from './mutation-types';
import { message } from 'ant-design-vue';
const mutations = {
  [types.SET_USER_INFO](state, user) {
    sessionStorage.setItem('user', JSON.stringify(user));
    state.user = user;
  },
  [types.ERR_MSG](state, msg) {
    message.error(msg, 2);
  },
  [types.SET_CURRENT_MANGA](state, mangaData) {
    sessionStorage.setItem('curManga', JSON.stringify(mangaData));
    state.currentManga = mangaData;
  }
};
export default mutations;

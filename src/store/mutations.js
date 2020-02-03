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
  },
  [types.SET_SECTIONS](state, sections) {
    sessionStorage.setItem('sections', JSON.stringify(sections));
    state.sections = sections;
  },
  [types.SET_CURRENT_SECTION](state, section) {
    sessionStorage.setItem('currentSection', JSON.stringify(section));
    state.currentSection = section;
  }
};
export default mutations;

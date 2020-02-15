import * as types from './mutation-types';
import { message } from 'ant-design-vue';
import router from '@/router/index';
const mutations = {
  [types.SET_USER_INFO](state, user) {
    sessionStorage.setItem('user', JSON.stringify(user));
    state.user = user;
    router.push('/');
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
  },
  [types.SET_TAGS](state, tags) {
    sessionStorage.setItem('tags', JSON.stringify(tags));
    state.tags = tags;
  },
  [types.SET_HISTORY_READ](state, manga) {
    state.historyRead.push(manga);
    localStorage.setItem('historyRead', JSON.stringify(state.historyRead));
  },
  [types.SET_SEARCH_RESULT](state, searchResult) {
    state.searchResult = searchResult;
    sessionStorage.setItem('searchResult', JSON.stringify(searchResult));
  }
};
export default mutations;

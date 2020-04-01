import * as types from './mutation-types';
import { message } from 'ant-design-vue';
import router from '@/router/index';
const mutations = {
  [types.SET_USER_INFO](state, user) {
    let { user: userInfo } = state;
    if (userInfo.token) {
      userInfo.user = user;
      sessionStorage.setItem('user', JSON.stringify(userInfo));
      state.user = userInfo;
      return;
    }
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
  },
  [types.SET_AUTHOR_MANGA](state, authorManga) {
    state.authorManga = authorManga;
    sessionStorage.setItem('authorManga', JSON.stringify(authorManga));
  },
  [types.SET_MANGA_DATA](state, mangaData) {
    state.mangaData = mangaData;
    sessionStorage.setItem('mangaData', JSON.stringify(mangaData));
  },
  [types.SET_CREATE_MANGA_FORM](state, mangaForm) {
    state.mangaForm = mangaForm;
    sessionStorage.setItem('mangaForm', JSON.stringify(mangaForm));
  },
  [types.SET_CREATE_MANGA_ID](state, mangaId){
    state.mangaId = mangaId;
    sessionStorage.setItem('mangaId', JSON.stringify(mangaId));
  },
  [types.SET_MANGA_TITLE_PAGE](state, mangaTitlePage){
    state.mangaTitlePage = mangaTitlePage;
    sessionStorage.setItem('mangaTitlePage', JSON.stringify(mangaTitlePage));
  },
  [types.SET_CHAPTER_DATA](state, chapterData){
    state.chapterData = chapterData;
    sessionStorage.setItem('chapterData', JSON.stringify(chapterData));
  }
};
export default mutations;

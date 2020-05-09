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
  [types.SET_ADMIN_INFO](state, admin){
    let {admin: adminInfo} = state;
    if(adminInfo.token) {
      adminInfo.admin = admin;
      sessionStorage.setItem('admin', JSON.stringify(adminInfo));
      state.admin = adminInfo;
      return;
    }
    sessionStorage.setItem('admin', JSON.stringify(admin));
    state.admin = admin;
  },
  [types.ERR_MSG](state, msg) {
    message.error(msg, 2);
  },
  [types.ADMIN_ERR_MSG](state, msg){
    message.error(msg, 1);
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
  },
  [types.SET_TABLE_COLUMS](state,tableColums){
    state.tabeleColums = tableColums;
    sessionStorage.setItem('tableColums', JSON.stringify(tableColums));
  },
  [types.SET_TABLE_DATA](state,tableData){
    state.tableData = tableData;
    sessionStorage.setItem('tableData', JSON.stringify(tableData));
  },
  [types.SET_TABLE_BY_EDIT](state,tableRowData){
    state.tableRowData = tableRowData;
    sessionStorage.setItem('tableRowData', JSON.stringify(tableRowData));
  },
  [types.SET_AUDIT_MANGA_DATA](state,auditMangaData){
    state.auditMangaData = auditMangaData;
    sessionStorage.setItem('auditMangaData', JSON.stringify(auditMangaData));
  },
  [types.SET_AUDIT_CHAPTER_DATA](state, auditChapterData){
    state.auditChapterData = auditChapterData;
    sessionStorage.setItem('auditChapterData', JSON.stringify(auditChapterData));
  }
};
export default mutations;

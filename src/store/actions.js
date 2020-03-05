import * as api from '@/api/api';
import * as types from './mutation-types';
function findIndex(list, section) {
  return list.findIndex(item => {
    return item.chapterId === section.chapterId;
  });
}
// 存储所有分类
export const setTags = ({ commit }, tags) => {
  commit(types.SET_TAGS, tags);
};
// 存储当前打开的漫画
export const setCurManga = ({ commit, state }, mangaData) => {
  const {
    currentManga: { mangaId: curMangaId }
  } = state;
  const { mangaId } = mangaData;
  if (curMangaId === mangaId) {
    return;
  }
  commit(types.SET_CURRENT_MANGA, mangaData);
};
// 存储当前漫画的集列表
export const setSections = async ({ commit }, sections) => {
  commit(types.SET_SECTIONS, sections);
};
// 存储当前漫画集数
export const setCurSection = ({ commit }, section) => {
  commit(types.SET_CURRENT_SECTION, section);
};
// 存入历史纪录
export const setHistoryRead = ({ commit, state }, manga) => {
  if (state.historyRead.length >= 10) {
    state.historyRead = state.historyRead.splice(0, 1);
  }
  commit(types.SET_HISTORY_READ, manga);
};
// 跳转下一章节
export const getNextSection = ({ commit, state }) => {
  const { sections, currentSection } = state;
  const cIndex = findIndex(sections, currentSection);
  if (cIndex === sections.length - 1) {
    commit(types.ERR_MSG, '当前已是最后一章!');
  } else {
    commit(types.SET_CURRENT_SECTION, sections[cIndex + 1]);
  }
};
// 存储搜索内容
export const setSearchResult = ({ commit }, searchResult) => {
  commit(types.SET_SEARCH_RESULT, searchResult);
};
// 用户登录
export const userLogin = async ({ commit }, reqBody) => {
  const res = await api.login(reqBody);
  const {
    data: { code, data, msg }
  } = res;
  if (code === 200) {
    commit(types.SET_USER_INFO, data);
    return data;
  } else {
    commit(types.ERR_MSG, msg);
  }
};
// 用户注册
export const userRegister = async ({ commit, state }, reqBody) => {
  const res = await api.register(reqBody);
  const {
    data: { code, data, msg }
  } = res;
  if (code === 200) {
    commit(types.SET_USER_INFO, data);
  } else {
    commit(types.ERR_MSG, msg);
  }
};

// 存入作者上传漫画数据
export const authorUploadManga = async ({ commit }, manga) => {
  commit(types.SET_AUTHOR_MANGA, manga);
};

// 储存作者漫画--点击的漫画数据
export const setMangaByClick = async ({commit}, data) =>{
  commit(types.SET_MANGA_DATA, data);
};

// 存入创建漫画表单数据
export const setCreateMangaForm = async ({commit}, form) =>{
  commit(types.SET_CREATE_MANGA_FORM, form);
}

// 存入漫画封面图片
export const setMangaTitlePage = async ({commit}, titlePage) => {
  commit(types.SET_MANGA_TITLE_PAGE, titlePage);
}

// 存入章节数据和图片
export const setChapterData = async ({commit}, chapterData) => {
  commit(types.SET_CHAPTER_DATA, chapterData);
}
import * as api from '@/api/api';
import * as types from './mutation-types';
function findIndex(list, section) {
  return list.findIndex(item => {
    return item.chapterId === section.chapterId;
  });
}
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
// 用户登录
export const userLogin = async ({ commit, state }, reqBody) => {
  const res = await api.login(reqBody);
  const {
    data: { code, data, msg }
  } = res;
  if (code === 200) {
    commit(types.SET_USER_INFO, data);
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

const sessionData = {
  user: JSON.parse(sessionStorage.getItem('user')),
  currentManga: JSON.parse(sessionStorage.getItem('curManga'))
};
const state = {
  user: sessionData.user || {},
  currentManga: sessionData.currentManga || {}
};
export default state;

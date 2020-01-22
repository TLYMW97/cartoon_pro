const sessionData = {
  user: JSON.parse(sessionStorage.getItem('user'))
};
const state = {
  user: sessionData.user || {}
};
export default state;

import * as api from '@/api/api';
import * as types from './mutation-types';
export const sayHi = () => {
  console.log('hi');
};
export const userInfo = async ({ commit, state }, reqBody) => {
  const res = await api.login(reqBody);
  const {
    data: { code, data, msg }
  } = res;
  console.log(res);
  if (code === 200) {
    commit(types.SET_USER_INFO, data);
  } else {
    commit(types.ERR_MSG, msg);
  }
};

import * as api from '@/api/api';
import * as types from './mutation-types';
export const sayHi = () => {
  console.log('hi');
};
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

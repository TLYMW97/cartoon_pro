import service from './http';

// 获取所有漫画
export const allManga = () => {
  return service.get('/findAllManga');
};
// 获取验证码
export const code = () => {
  return service.get('/getCode');
};
// 登录
export const login = reqBody => {
  return service.post('/login', reqBody);
};
// 注册
export const register = reqBody => {
  return service.post('/register', reqBody);
};
// 检查用户名
export const checkName = userName => {
  return service.post('/chkUserName', {
    userName
  });
};

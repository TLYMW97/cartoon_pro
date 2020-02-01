import service from './http';
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

// 获取所有漫画
export const allManga = () => {
  return service.get('/findAllManga');
};
export const getChapter = mangaId => {
  return service.post('/findChapter', { mangaId });
};
export const getEpisode = chapterId => {
  return service.post('/findEpisode', { chapterId });
};

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
// 获取漫画详情
export const getChapter = mangaId => {
  return service.post('/findChapter', { mangaId });
};
// 获取漫画图
export const getEpisode = chapterId => {
  return service.post('/findEpisode', { chapterId });
};
// 获取免费排行榜
export const freePop = () => {
  return service.get('/findFreePop');
};
// 获取付费排行榜
export const payPop = () => {
  return service.get('/findPayPop');
};
// 获取人气排行榜
export const mostPop = () => {
  return service.get('/findMostPop');
};

import service from './http';

export const allManga = () => {
  return service.get('/findAllManga');
};
export const code = () => {
  return service.get('/getCode');
};
export const login = reqBody => {
  return service.post('/login', reqBody);
};
export const register = reqBody => {
  return service.post('/register', reqBody);
};

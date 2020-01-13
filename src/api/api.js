import {get} from './http';

const api = {};

//获取所有漫画
api.findAllManga = () => {
    return get('/api/findAllManga');
};


export default api;
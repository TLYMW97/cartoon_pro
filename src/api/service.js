import axios from 'axios';

function getToken() {
    return window.sessionStorage.getItem('token')||'';
}

let service = axios.create({
    baseUrl: process.env.BASE_API,
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        if(getToken()){
            config.headers['token'] = getToken();
            config.headers['Content-Type'] = 'application/json;chartset=utf-8';
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        let res = response.data;
        if(res.code === 0){
            return Promise.resolve(res);
        }else if(res.code === 200){
            return Promise.resolve(res);
        }
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
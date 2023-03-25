import axios from 'axios'
import router from './router'
// http request 请求拦截器


axios.defaults.baseURL = 'http://127.0.0.1:5000'; // test

axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    let pathname = location.pathname;
    if(localStorage.getItem('token') === null || localStorage.getItem('token') === ''){
        if(pathname != '/'){
            // config.headers.common['token'] = localStorage.getItem('token');
            router.replace('/');
        }
    }
    return config;
}, error => {
    // 对请求错误做些什么
    console.log(999)
    return Promise.reject(error);
});


// http response 响应拦截器。拦截token过期，从而跳转到主页面
axios.interceptors.response.use(response => {
    return response;
},error => {
    if (error.response) {
        switch (error.response.data.code) {
            case 10102:
                localStorage.removeItem('token');
                router.replace('/')
                break
            default:{
                console.log(error.response.data);
                // alert(error.response.data.message);

            }
        }
        // 返回接口返回的错误信息
        // return Promise.reject(error.response.data);
        return Promise.reject(error)
    }
});


export default axios;
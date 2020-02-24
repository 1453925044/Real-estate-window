import Qs from 'qs'
import axios from 'axios'
import { Notify } from 'vant';

//接口基路径
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : 'http://www.chinabdc.cn:8093';
// 请求超时时间
axios.defaults.timeout = 60000;

// 允许所有跨域来源
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//参数格式化
axios.defaults.transformRequest = [function (data) {
    data = Qs.stringify(data, { indices: false });
    return data;
}];

// 请求拦截器 
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.error(error);
    });

// 响应拦截器
axios.interceptors.response.use(
    response => {
        return Promise.resolve(response);
    },
    // 服务器状态码不是200的情况 
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录    
                // 未登录则跳转登录页面，并携带当前页面的路径    
                // 在登录成功后返回当前页面，这一步需要在登录页操作。    
                case 401:
                    // router.push({
                    //     path: '/login',
                    //     query: { redirect: router.currentRoute.fullPath }
                    // });
                    break;
                // 403 token过期    
                // 登录过期对用户进行提示    
                // 清除本地token和清空vuex中token对象    
                // 跳转登录页面    
                case 403:
                    // // 清除token     
                    // store.commit('setUserInfo', null);
                    // router.push({
                    //     path: '/login',
                    //     query: { redirect: router.currentRoute.fullPath }
                    // });
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    Notify({
                        title: '提示',
                        message: '登录过期，请重新登录',
                        position: 'bottom-right',
                        type: 'warning'
                    });
                    break;
                case 404:
                    Notify({
                        title: '提示',
                        message: '接口请求不存在',
                        position: 'bottom-right',
                        type: 'warning'
                    });
                    break;
                case 500:
                    Notify.error({
                        title: '错误',
                        message: 'api内部错误',
                        position: 'bottom-right',
                    });
                    break;
                case 504:
                    Notify({
                        title: '提示',
                        message: '网关超时,请检查环境再试',
                        position: 'bottom-right',
                        type: 'warning'
                    });
                    break;
                // 其他错误，直接抛出错误提示    
                default:
                    Notify.error({
                        title: '错误',
                        position: 'bottom-right',
                        message: error.response.data.message,
                    });
            }
        }
        return Promise.reject(error);
    }
);

const httpGet = (url, params) => {
    return new Promise((resolve, reject) => {
        params.timestamp = (new Date()).valueOf();
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}

const httpPost = (url, params) => {
    let config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    };
    return new Promise((resolve, reject) => {
        params.timestamp = (new Date()).valueOf();
        axios.post(url, params, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}
export default axios;
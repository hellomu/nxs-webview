"use strict";

import Vue from 'vue';
import axios from "axios";
import { Dialog } from 'vant';

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.baseURL || process.env.VUE_APP_apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);
console.log(1111111111, _axios, config)
_axios.interceptors.request.use(
  function(config) {
    console.log(2222222222222, config, process.env.VUE_APP_apiUrl)
    config.url = `/open/alipay${config.url}`
    // Do something before request is sent
    // if(config.params) {
    //   config.params.userId = '123234'
    // }
    // if(config.data) {
    //   config.data.userId = '123234'
    // }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    if(error.response) {
      Dialog.confirm({
        // title: '标题',
        message: '网络异常，稍后重试',
      })
        .then(() => {
          // on confirm
          Dialog.close()
        })
        .catch(() => {
          // on cancel
          Dialog.close()
        });
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default _axios;

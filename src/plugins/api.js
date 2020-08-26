import axios from './axios';

export function getUserInfo(params) {
    return axios({
        method: 'get',
        params,
        url: ''
    })
}
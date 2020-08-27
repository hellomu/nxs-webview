import axios from 'axios';

export function getUserInfo(params) {
    return axios({
        method: 'get',
        params,
        url: '/user/info'
    })
}
export function getList(params) {
    return axios({
        method: 'get',
        params,
        url: '/goods/list'
    })
}
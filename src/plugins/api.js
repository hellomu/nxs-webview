import axios from 'axios';

export function getUserInfo(params) {
    return axios({
        method: 'get',
        params,
        url: ''
    })
}
export function getList(params) {
    return axios({
        method: 'get',
        params,
        url: '/goods/list'
    })
}
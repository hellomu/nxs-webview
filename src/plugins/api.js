import axios from './axios';

export function getUserInfo(params) {
    return axios({
        method: 'get',
        params,
        url: '/user_info_share'
    })
}
export function getList(params) {
    return axios({
        method: 'get',
        params,
        url: '/marketing/voucher/record'
    })
}
/*
 * @Author: 周祥毅
 * @Date: 2020-02-12 17:12:35
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-05 13:12:58
 * @Description: 
 */
/**
 * 此js为数据请求模块
 * @author 周祥毅
 */
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default function AxiosGetData(url, params, type) {

    if (type === 'get') {
        return axios.get(url, {
            params: params
        }).then((res) => {
            return Promise.resolve(res.data)
        }).catch((res) => {
            //////console.log(res)
        })
    } else if (type === 'post') {
        // 发送 POST 请求
        return axios({
            method: 'post',
            url: url,
            data: JSON.stringify(params)
        }).then((res) => {
            return Promise.resolve(res.data)
        })
    }

}


import axios from "./axiosConf";

export default {
    login: (data) => {
        return axios.post('/api/login', data || {})
    },
    isLogin: () => {
        return axios.get('/api/isLogin')
    },


}
import axios from "./axiosConf";

export default {
    list: (data) => {
        return axios.get('/api/movie', {params: data || {}})
    },
    detail: (id) => {
        return axios.get('/api/movie', {params: {id: id}})
    },
    del: (id) => {
        return axios.delete('/api/movie', {params: {id: id}})
    },
}

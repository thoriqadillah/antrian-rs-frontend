import axios from "axios";
import authService from '../services/auth.service'

axios.defaults.baseURL = 'http://localhost:8000/api/'
axios.defaults.withCredentials = true

let refresh = false
axios.interceptors.response.use(res => res, async err => {
    if (err.response.status == 401 && !refresh) {
        refresh = true
        let authorized = await authService.refresh()
        if (authorized) return axios(err.config)
    }

    refresh = false
    return err
})
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/api/'
axios.defaults.withCredentials = true

let refresh = false
axios.interceptors.response.use(res => res, async err => {
    if (err.response.status == 401 && !refresh) {
        
        refresh = true
        const { status, data } = await axios.post('refresh')
        if (status == 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.authorisation.token}`
            return axios(err.config)
        }
    }

    refresh = false
    return err
})
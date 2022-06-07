import axios from "axios";

class AuthService {
    async register(user) {
        try {
            const res = await axios.post('register', {
                name: user.name,
                email: user.email,
                password: user.password
            })

            return res
        } catch(e) {
            console.log(e.message)
        }
    }

    async login(user) {
        try {
            const res = await axios.post('login', { 
                email: user.email,
                password: user.password
            })
            
            const { status, data } = res
            if (status == 200) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.authorisation.token}`
            }
            
            return res
        } catch (e) {
            console.log(e)
        }
    }

    async refresh() {
        try {
            const res = await axios.post('refresh')
            const { status, data } = res
            if (status == 200) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.authorisation.token}`
                return true
            }

            return false
        } catch (err) {
            console.log(err)
            return false
        }
    }

    async logout() {
        try {
            const { status } = await axios.post('logout')
            if (status == 200) return true

            return false

        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default new AuthService
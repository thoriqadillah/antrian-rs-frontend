import { useRouter } from 'vue-router';
import axios from "axios";

class AuthService {
    #token = '';
    #router = useRouter()

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
            
            this.#token = res.data.authorisation.token
            if (this.#token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.#token}`
            }
            
            return res
        } catch (e) {
            console.log(e)
        }
    }

    refresh() {
        
    }

    logout() {
        this.#token = ''
    }
}

export default new AuthService
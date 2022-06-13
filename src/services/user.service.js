import axios from "axios"
import { useStore } from 'vuex';

class UserService {
    async getAntrianUser() {
        try {
            const res = await axios.get('get-antrian-user')
            return res
        } catch (error) {
            console.log(error)
        }
    }

    async daftarAntrian(data) {
        try {
          const res = await axios.post('insert-antrian', data)

          return res
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAntrian() {
        try {
            const res = await axios.delete('delete-antrian')
            return res
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserService
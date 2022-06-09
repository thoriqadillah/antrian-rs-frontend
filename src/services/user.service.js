import axios from "axios"

class UserService {
    getAntrianUser() {

    }

    async daftarAntrian(data) {
        try {
          const res = await axios.post('insert-antrian', data)
          return res
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserService
import axios from "axios"

class RsService {
    async getAntrian() {
        try {
            const res = await axios.get('get-antrian')
            return res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    async getPoli() {

    }
}

export default new RsService
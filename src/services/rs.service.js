import axios from "axios";

class RsService {
  async getAntrian() {
    try {
      const res = await axios.get("get-antrian");
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPoli() {
    try {
      const res = await axios.get("get-poli");
      // return res.data;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new RsService

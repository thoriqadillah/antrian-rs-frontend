import axios from "axios";

class AdminService {
  async getAntrian() {
    try {
      const res = await axios.get("get-antrian");
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getAntrianUser() {
    try {
      const res = await axios.get("get-antrian-user");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  async updateAntrian(body) {
    try {
      const res = await axios.put("update-antrian", body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new AdminService

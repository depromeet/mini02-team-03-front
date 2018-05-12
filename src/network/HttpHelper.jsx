import axios from 'axios/index';
import StorageManager from '../data/StorageManager';

class HttpHelper {
  constructor() {
    this.baseURL = 'http://13.209.66.115:8008';
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  setToken = ({ token }) => {
    this.accessToken = token;
  }

  async login({ username }) {
    try {
      const res = await this.axiosInstance.post('/login', {
        username,
      });

      if (res) {
        this.accessToken = res.headers.authorization;
        StorageManager.setToken(this.accessToken);
        return true;
      }

      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async getStudies({ year, month, week }) {
    try {
      const res = await this.axiosInstance.get('/schedules', {
        params: {
          year,
          month,
          week,
        },
        headers: {
          Authorization: this.accessToken,
        },
      });

      if (res) {
        return res.data.data;
      }

      return [];
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async getLeader({ year, month, week }) {
    try {
      const res = await this.axiosInstance.get('/schedules', {
        params: {
          year,
          month,
          week,
        },
        headers: {
          Authorization: this.accessToken,
        },
      });

      if (res) {
        return res.data.isLeader;
      }

      return [];
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}

const httpHelper = new HttpHelper();
export default httpHelper;

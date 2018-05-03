import axios from 'axios';

class HttpWrapper {
  constructor() {
    // TODO: Server URL 입력 필요
    this.baseURL = 'https://test.com';
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  async get({ url, headers }) {
    try {
      const res = await this.axiosInstance.get(url, {
        headers,
      });

      return res.data;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async post({ url, headers, body }) {
    try {
      const res = await this.axiosInstance.get(url, {
        headers,
      }, {
        body,
      });

      return res.data;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export default HttpWrapper;

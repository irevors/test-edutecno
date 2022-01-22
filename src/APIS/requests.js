const BASE_URL = '157.230.190.251';
import axios from 'axios';
import qs from 'qs';

export default {
  async login(user) {
    const url = `http://${BASE_URL}/api/v1/cmodels/users/login`;
    const options = {
      method: 'POST',
      body: qs.stringify(user),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    console.log(options);
    try {
      const res = await fetch(url, options);
      const resJson = await res.json();
      return resJson;
    } catch (error) {
      console.error(error);
    }
  },
  async dashboard() {
    const url = `http://${BASE_URL}/api/v1/cmodels/secure/dashboard`;

    try {
      const resJson = axios.get(url);
      return resJson;
    } catch (error) {
      console.error(error);
    }
  },
  async orderMonitor() {
    const url = `http://${BASE_URL}/api/v1/cmodels/secure/ordenes?oficina=&estado&fecha-ini=&fecha-fin=&page=1&size=10`;
    try {
      const resJson = axios.get(url);
      return resJson;
    } catch (error) {
      console.error(error);
    }
  },
};

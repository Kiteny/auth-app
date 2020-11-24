import axios from 'axios';
import { BASE_URL, COUNTRY_KEY, INVITED_BY } from './constansts';

axios.defaults.baseURL = BASE_URL;

export default {
  signUp({ email, password, phone, name, surname }) {
    return axios('/clients/create/', {
      method: 'POST',
      data: {
        name,
        surname,
        phone,
        invited_by: INVITED_BY,
        country_key: COUNTRY_KEY,
        user: {
          email,
          password,
        },
      }
    });
  },
  signIn(email, password) {
    return axios('/clients/token/', {
      method: 'POST',
      data: {
        username: email,
        password,
      }
    });
  },
  getRefreshToken: () => localStorage.getItem('refresh_token'),
}
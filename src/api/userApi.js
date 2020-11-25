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
  async refreshAccessToken() {
    const refreshToken = this.getRefreshToken();

    const response = await axios('/clients/token/refresh/', {
      method: 'POST',
      data: {
        refresh: refreshToken,
      }
    });

    this.setAccessToken(response.data.access);
  },
  getRefreshToken:  () =>       localStorage.getItem('refresh_token'),
  setRefreshToken:  (token) =>  localStorage.setItem('refresh_token', token),
  getAccessToken:   () =>       localStorage.getItem('access_token'),
  setAccessToken:   (token) =>  localStorage.setItem('access_token', token),
  getСlientId:      () =>       localStorage.getItem('client_id'),
  setСlientId:      (id) =>     localStorage.setItem('client_id', id),
}

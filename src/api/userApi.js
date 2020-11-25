import axios from 'axios';
import { BASE_URL, COUNTRY_KEY, INVITED_BY } from './constansts';

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(async (request) => {
  let accessToken = userApi.getAccessToken();

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
});

const userApi = {
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
  async fetchUserProfile(failCallback) {
    const clientId = this.getСlientId();

    const interceptor = axios.interceptors.response.use(null, async (error) => {
      if (error.request.status !== 401) {
        return Promise.reject(error);
      }

      try {
        if (fetchData.stopTry) {
          throw new Error('stoptry');
        } 

        fetchData.stopTry = true;

        await this.refreshAccessToken();
        return fetchData();
      } catch (e) {
        if (e.isAxiosError && e.response.status === 401 || e.message === 'stoptry'){
          failCallback();
          return {};
        }

        throw e;
      }
    });

    function fetchData() {
      try {
        return axios(`/clients/${clientId}/`, {
          method: 'POST',
        });
      } finally {
        axios.interceptors.response.eject(interceptor);
      }
    }

    return fetchData();
  },
  getRefreshToken:  () =>       localStorage.getItem('refresh_token'),
  setRefreshToken:  (token) =>  localStorage.setItem('refresh_token', token),
  getAccessToken:   () =>       localStorage.getItem('access_token'),
  setAccessToken:   (token) =>  localStorage.setItem('access_token', token),
  getСlientId:      () =>       localStorage.getItem('client_id'),
  setСlientId:      (id) =>     localStorage.setItem('client_id', id),
}

export default userApi;

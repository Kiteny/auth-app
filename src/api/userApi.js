import axios from 'axios';
import { BASE_URL, COUNTRY_KEY, INVITED_BY } from './constansts';

axios.defaults.baseURL = BASE_URL;

export default {
  register(email, password, phone, name, surname) {
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
  }
}
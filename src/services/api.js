import axios from 'axios';

const api = axios.create({
  baseURL: 'https://instalab.herokuapp.com',
});

export default api;

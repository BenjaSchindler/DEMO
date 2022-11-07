import axios from 'axios';
import { clearSessionStorage } from './CookiesHelper';



const apiurl = axios.create({
  baseURL: 'http://localhost:3001/api'
});

apiurl.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

apiurl.interceptors.response.use(undefined, (err) => {
  if (err.response.status === 419) {
    clearSessionStorage();
    window.location.href = '/Login';
  }
  return Promise.reject(err);
});

export { apiurl };
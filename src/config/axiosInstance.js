import axios from 'axios';


const api = axios.create({
  baseURL: 'https://69343fa44090fe3bf01f6c0f.mockapi.io/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;

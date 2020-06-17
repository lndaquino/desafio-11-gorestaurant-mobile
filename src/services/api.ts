import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  // baseURL: 'http://192.168.15.40:3333', // yarn json-server server.json -p 3333 -H 192.168.15.40
});

export default api;

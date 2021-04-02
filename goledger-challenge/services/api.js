import { BASE_URL } from './endpoints';

const api = (endpoint, options) => fetch(BASE_URL + endpoint, options).then((res) => res.json());

export default api;

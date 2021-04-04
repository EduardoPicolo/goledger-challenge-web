import { BASE_URL } from './endpoints';

const api = (endpoint, options) => fetch(BASE_URL + endpoint, options).then((res) => {
  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    throw new Error(text);
  });
});

export default api;

import { SEARCH_ASSET } from './endpoints';
import api from './api';

export const createAsset = () => {};

export const updateAsset = () => {};

export const deleteAsset = () => {};

export const readAsset = () => {};

export const searchAsset = async (query) => {
  const data = await api(SEARCH_ASSET, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  });
  // console.log(data);
  return data;
};

import { DELETE_ASSET, READ_ASSET, SEARCH_ASSET } from './endpoints';
import api from './api';

export const createAsset = () => {};

export const updateAsset = () => {};

export const deleteAsset = async (assetType, id) => {
  const body = {
    key: {
      '@assetType': assetType,
      '@key': id,
    },
  };

  const data = await api(DELETE_ASSET, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return data;
};

export function readAsset(assetType, id) {
  const body = {
    key: {
      '@assetType': assetType,
      '@key': id,
    },
  };
  return async () => {
    const data = await api(READ_ASSET, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return data;
  };
}

export function searchAsset(query) {
  return async () => {
    const data = await api(SEARCH_ASSET, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    });

    return data;
  };
}

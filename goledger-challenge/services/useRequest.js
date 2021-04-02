import useSWR from 'swr';
import fetcher from './api';

const useRequest = (endpoint, options) => {
  const { data, error } = useSWR(endpoint, (url) => fetcher(url, options));

  return {
    data,
    isLoading: !error && !data,
    isRejected: error,
  };
};

export default useRequest;

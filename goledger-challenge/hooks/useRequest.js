import useSWR from 'swr';

const useRequest = (key, fetcher, initialData) => {
  const { data, error } = useSWR(key, fetcher, { initialData });

  return {
    data,
    isLoading: !error && !data,
    isRejected: error,
  };
};

export default useRequest;

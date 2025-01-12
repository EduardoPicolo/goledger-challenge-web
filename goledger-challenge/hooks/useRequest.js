import useSWR from 'swr';

const useRequest = (key, fetcher, initialData) => {
  const { data, error, mutate } = useSWR(key, fetcher, { initialData });

  return {
    data,
    isLoading: !error && !data,
    isRejected: error?.message,
    mutate,
  };
};

export default useRequest;

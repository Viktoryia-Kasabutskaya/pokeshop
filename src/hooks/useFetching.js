import { useCallback, useState } from "react";

const useFetching = (requestFunction) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleDataLoad = useCallback(
    (...args) => {
      (async () => {
        try {
          setLoading(true);
          const response = await requestFunction(...args);
          setData(response);
        } catch (error) {
          setErrors(error.response.data);
        } finally {
          setLoading(false);
        }
      })();
    },
    [requestFunction]
  );

  return { data, errors, handleDataLoad, isLoading };
};

export default useFetching;

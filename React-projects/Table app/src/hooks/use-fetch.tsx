import { useState, useEffect } from 'react';

function useFetch(url: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<object>();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resonse) => {
        if (!resonse.ok) {
          throw new Error('Fetching data has failed!');
        }

        return resonse.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return {
    isLoading,
    data,
    error,
  };
}

export default useFetch;

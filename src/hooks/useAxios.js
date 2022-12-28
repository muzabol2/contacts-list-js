import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (config, loadOnStart = true) => {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState();
   const [error, setError] = useState('');

   useEffect(() => {
      if (loadOnStart) sendRequest();
      else setLoading(false);
   }, [loadOnStart]);

   const request = () => {
      sendRequest();
   };

   const sendRequest = () => {
      setLoading(true);

      axios(config)
         .then((response) => {
            setError('');
            setData(response.data);
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => setLoading(false));
   };

   return [loading, data, error, request];
};

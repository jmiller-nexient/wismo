import { useEffect, useState } from 'react';

import httpClient from './axiosHttpClient';
import { IHttpResponse } from './types';

interface IRequestState<T> {
  cancel: () => void;
  data: T | null;
  error: Error | null;
  loading: boolean;
  refresh: () => void;
}

const useHttpGet = <T>(url: string): IRequestState<T> => {
  const [innerTrigger, setInnerTrigger] = useState<number>(+new Date());

  // eslint-disable-next-line no-console
  console.log('httpGet', url);

  const initialState: IRequestState<T> = {
    cancel: httpClient.cancel,
    data: null,
    error: null,
    loading: false,
    refresh: (): void => setInnerTrigger(+new Date()),
  };

  const [state, setState] = useState<IRequestState<T>>(initialState);

  useEffect(() => {
    setState({
      ...state,
      data: null,
      error: null,
      loading: true,
    });

    setTimeout(async () => {
      try {
        const response: IHttpResponse = await httpClient.get(url);

        // eslint-disable-next-line no-console
        console.info('[useHttpGet] request succeeded', response);

        if (response) {
          setState({
            ...state,
            data: response.data,
            loading: false,
          });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[useHttpGet] request failed', error);

        const errorMessage = httpClient.wasCancelled(error) ? 'Cancelled' : error.toString();

        setState({
          ...state,
          error: new Error(errorMessage),
          loading: false,
        });
      }
    }, 2500);
  }, [innerTrigger, url]);

  return state;
};

export default useHttpGet;

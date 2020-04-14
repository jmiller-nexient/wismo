import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { IHttpClient } from './types';

const cancelTokenSource = axios.CancelToken.source();

const buildAxiosInstance = (): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL: '', // config.baseUrl,
    cancelToken: cancelTokenSource.token,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    responseType: 'json',
    timeout: 10000,
  });

  instance.interceptors.request.use(onRequestSuccess);
  instance.interceptors.response.use(onResponseSuccess, onResponseError);

  return instance;
};

const onRequestSuccess = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // eslint-disable-next-line no-console
  console.log('AXIOS - Sending Request: ', config);

  return config;
};

// tslint:disable-next-line: no-any
const onResponseSuccess = (response: AxiosResponse<any>): AxiosResponse<any> => {
  // eslint-disable-next-line no-console
  console.log('AXIOS - Successful Response: ', response);

  return response;
};

// tslint:disable-next-line: no-any
const onResponseError = (error: any): Promise<any> => {
  // eslint-disable-next-line no-console
  console.log('AXIOS - Error Response: ', error);

  return Promise.reject(error);
};

const axiosClientFactory = (): IHttpClient => {
  const instance = buildAxiosInstance();

  return {
    cancel: (): void => cancelTokenSource.cancel(),
    get: instance.get,
    wasCancelled: axios.isCancel,
  };
};

const axiosClient = axiosClientFactory();

export default axiosClient;

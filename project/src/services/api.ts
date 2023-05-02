import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {toast} from 'react-toastify';
import {StatusCodeMapping} from './const';
import {getToken} from './token';

const BASE_URL = 'https://12.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

export const createApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.error(error.response.data.error);
      }
      throw error;
    }
  );


  return api;
};

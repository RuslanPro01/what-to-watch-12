import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {toast} from 'react-toastify';
import {StatusCodeMapping} from './const';

const BASE_URL = 'https://12.react.pages.academy/wt';
const REQUEST_TIMEOUT = 2000;

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.response.use(
    (responce) => responce,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.error(error.response.data.error);
      }
      throw Error;
    }
  );

  return api;
};

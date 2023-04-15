import axios, {AxiosError, AxiosResponse} from 'axios';
import {toast} from 'react-toastify';
import {StatusCodeMapping} from './const';
import {changeLoadStatus} from '../store/action';
import {LoadStatus} from '../store/const';
import {store} from '../store';

const BASE_URL = 'https://12.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

export const createApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.response.use(
    (responce) => responce,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.error(error.response.data.error);
        store.dispatch(changeLoadStatus(LoadStatus.Fail));
      }
      throw Error;
    }
  );

  return api;
};

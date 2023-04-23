import axios, {AxiosError, AxiosResponse} from 'axios';
import {toast} from 'react-toastify';
import {ApiRoute, LoadStatus, StatusCodeMapping} from './const';
import {changeLoadStatusComments, changeLoadStatusFilm, changeLoadStatusFilms} from '../store/action';
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
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.error(error.response.data.error);
        const urlAddress = error.response.config.url;
        if (urlAddress) {
          const isFilmsRouteError = urlAddress.includes(ApiRoute.Films);
          const isFilmRouteError = urlAddress.includes(ApiRoute.Film('')) && +urlAddress[urlAddress.length - 1] >= 0;
          const isCommentsRouteError = urlAddress.includes(ApiRoute.Comments('')) && +urlAddress[urlAddress.length - 1] >= 0;

          if (isFilmsRouteError) {
            store.dispatch(changeLoadStatusFilms(LoadStatus.Fail));
          }
          if (isFilmRouteError) {
            store.dispatch(changeLoadStatusFilm(LoadStatus.Fail));
          }
          if (isCommentsRouteError) {
            store.dispatch(changeLoadStatusComments(LoadStatus.Fail));
          }
        }
      }
      throw Error;
    }
  );

  return api;
};

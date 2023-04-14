import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://12.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 2000;

export const createApi = (): AxiosInstance => axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT
});

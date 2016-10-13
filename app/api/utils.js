import axios from 'axios';
import Qs from 'qs';

// API Keys
export const PUBLIC_API = '298bab46381a6daaaee19aa5c8cafea5';
export const PRIVATE_API = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';

// API URLS
export const BASE_API = '/v1/public';
export const CHARACTERS_API = `${BASE_API}/characters`;

/**
 * Instance of Axios
 * @type {axios.AxiosInstance}
 */
export const instanceAPI = axios.create({
  baseURL: 'http://gateway.marvel.com',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => (
    Qs.stringify(params)
  ),
});

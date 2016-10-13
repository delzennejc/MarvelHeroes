import md5 from 'crypto-md5';
import {
  PUBLIC_API,
  PRIVATE_API,
} from '../api/utils';

if (!Date.now) {
  Date.now = () => (new Date().getTime());
}

export const timeStampsNow = () => Math.floor(Date.now() / 1000);

export const getHash = () => md5(
  `${timeStampsNow()}${PRIVATE_API}${PUBLIC_API}`,
  'hex'
);

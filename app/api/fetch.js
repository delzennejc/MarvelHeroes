
import {
  instanceAPI,
  PUBLIC_API,
  CHARACTERS_API,
} from './utils';
import {
  timeStampsNow,
  getHash,
} from '../utils/crypto';
import {
  getCharacters,
  getCharacter,
} from '../actions/act_characters';

export const currentOffset = 20;

export const fetchAllCharacters = (page = 0) =>
  dispatch => {
    const offset = (page) ? (page - 1) * currentOffset : 0;
    return instanceAPI.get(
      `${CHARACTERS_API}?ts=${timeStampsNow()}&apikey=${PUBLIC_API}&hash=${getHash()}&offset=${offset}` // eslint-disable-line
    )
    .then(res => dispatch(getCharacters(res.data.data)))
    .catch(err => console.error(err));
  };

export const fetchOneCharacter = (id) =>
  dispatch =>
    instanceAPI.get(
      `${CHARACTERS_API}/${id}?ts=${timeStampsNow()}&apikey=${PUBLIC_API}&hash=${getHash()}`
    )
    .then(res => dispatch(getCharacter(res.data.data.results[0])))
    .catch(err => console.error(err));

import test from 'ava';
import data from './rdc_characters';
import {
  GET_CHARACTERS,
  getCharacters,
} from '../../actions/act_characters';

test('Test reducer rdc_characters', t => {
  const expected = {};
  t.deepEqual(data(undefined, { type: null }), expected);
});

test('Test action creator act_characters', t => {
  const expected = {
    type: GET_CHARACTERS,
    payload: {
      name: 'test',
    },
  };
  t.deepEqual(getCharacters({ name: 'test' }), expected);
});

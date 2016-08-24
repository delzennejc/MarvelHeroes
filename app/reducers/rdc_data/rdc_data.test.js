import React from 'react';
import test from 'ava';
import data from './rdc_data';
import {
  ACTION,
  insertData,
} from '../../actions/act_data';

test('Test reducer rdc_data', t => {
  let expected = {
    love: 'LOVE',
  };
	t.deepEqual(data(undefined, { type: null }), expected);
});

test('Test action creator act_data', t => {
  let expected = {
    type: ACTION,
    payload: 'LIVE'
  };
	t.deepEqual(insertData('LIVE'), expected);
});

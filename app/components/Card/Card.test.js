import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { Card } from './Card';

test('Test component Card', t => {
  const wrapper = shallow(<Card />);
  const expected = wrapper.hasClass('card');
  t.truthy(expected);
});


test('Test component Card', t => {
  const wrapper = shallow(<Card name="Marvel" />);
  const expected = wrapper.find('.card__name').text();
  t.deepEqual(expected, 'Marvel');
});

import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { Body } from './Body';

test('Test component Body exists', t => {
	let wrapper = shallow(<Body />);
  let expected = wrapper.hasClass('Body');
	t.truthy(expected);
});

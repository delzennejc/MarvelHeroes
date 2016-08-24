import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { NotFound } from './NotFound';

test('Test component NotFound exists', t => {
	let wrapper = shallow(<NotFound />);
  let expected = wrapper.hasClass('NotFound');
	t.truthy(expected);
});

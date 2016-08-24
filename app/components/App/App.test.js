import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { App } from './App';

test('Test component App exists', t => {
	let wrapper = shallow(<App />);
  let expected = wrapper.hasClass('App');
	t.truthy(expected);
});

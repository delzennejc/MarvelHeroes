import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { CardList } from './CardList';

const data = [
  {
    id: 85678,
    name: 'test',
    thumbnail: {
      extention: 'jpg',
      path: 'https://google.fr',
    },
    urls: [],
  },
];

test('Test component CardList', t => {
  const wrapper = shallow(<CardList data={[]} />);
  const expected = wrapper.hasClass('card_list');
  t.truthy(expected);
});

test('Test component CardList', t => {
  const wrapper = shallow(<CardList data={data} />);
  const expected = wrapper.find('.card_list').props();
  t.truthy(expected.children[0].props.name, 'test');
});

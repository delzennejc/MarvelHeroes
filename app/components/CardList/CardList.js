import React, { PropTypes } from 'react';
import get from 'lodash/get';
import Card from '../Card';
import getMedia from '../../utils/getMedia';

export const CardList = ({ data }) => (
  <div className="card_list">
    {
      data.map((el) =>
        <Card
          key={el.id}
          id={el.id}
          name={el.name}
          media={getMedia(get(el, 'thumbnail'))}
          urls={el.urls}
        />
      )
    }
  </div>
);

CardList.propTypes = {
  data: PropTypes.array,
};

export default CardList;

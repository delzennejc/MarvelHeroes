import React, { PropTypes } from 'react';
import {
  Link,
  withRouter,
} from 'react-router';
import filter from 'lodash/filter';
import BackgroundImage from 'react-background-image-loader';

export const Card = (props) => (
  <div className="card">
    <BackgroundImage
      className="card__image"
      src={props.media}
      placeholder="/images/placeholder.png"
      onClick={() => props.router.push(`/character/${props.id}`)}
    >
      {/* <div
        className="card__image"
        style={{ backgroundImage: `url(${props.media})` }}
      >
      </div> */}
    </BackgroundImage>
    <div className="card__name">{props.name}</div>
    <div className="card__tools">
      <Link className="card__tools__links" to={`/character/${props.id}`}>details</Link>
      {
        filter(props.urls, el => (el.type !== 'detail'))
          .map(el =>
            <a
              className="card__tools__links"
              key={el.url}
              href={el.url}
            >
              {el.type}
            </a>)
      }
    </div>
  </div>
);

Card.propTypes = {
  media: PropTypes.string,
  name: PropTypes.string,
  urls: PropTypes.array,
  id: PropTypes.number,
};

export default withRouter(Card);


import React, { PropTypes } from 'react';

export const CharacterInfos = (props) => (
  <div className="character_infos">
    <div
      className="character_infos__image"
      style={{ backgroundImage: `url(${props.media})` }}
    >
    </div>
    <div className="character_infos__infos">
      <div className="character_infos__infos__header">
        <span className="header__title">{props.name}</span>
        <p>{props.description}</p>
      </div>
      <div className="character_infos__infos__books">
        <span className="books__title">
          Comics
        </span>
        <div className="books__comics">
          {props.comics.map(el =>
            <span key={el.resourceURI} className="books__line">
              {el.name}
            </span>)
          }
        </div>
        <span className="books__title">
          Series
        </span>
        <div className="books__series">
          {props.series.map(el =>
            <span key={el.resourceURI} className="books__line">
              {el.name}
            </span>)
          }
        </div>
      </div>
    </div>
  </div>
);

CharacterInfos.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  media: PropTypes.string,
  comics: PropTypes.array,
  series: PropTypes.array,
};

export default CharacterInfos;

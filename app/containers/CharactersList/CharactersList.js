import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import CardList from '../../components/CardList';

export class CharactersList extends PureComponent {
  render() {
    return (
      <div className="characters_list">
        <span className="characters_list__title">Fiche des super héros: </span>
        <CardList data={get(this.props.data, 'results', [])} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
});

CharactersList.propTypes = {
  data: PropTypes.object,
  fetchCharacters: PropTypes.func,
};

export default connect(mapStateToProps)(CharactersList);

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import get from 'lodash/get';
import CardList from '../../components/CardList';
import PageList from '../../components/PageList';
import {
  getTotalPage,
} from '../../utils/getTotalPage';

export class CharactersList extends PureComponent {
  render() {
    const pages = getTotalPage(this.props.totalHeroes);
    return (
      <div className="characters_list">
        <span className="characters_list__title">Fiche des super héros: </span>
        <CardList data={get(this.props.data, 'results', [])} />
        <PageList
          pages={(pages.totalPage + pages.lastPage)}
          currentPage={+get(this.props.location, 'query.page', 1)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  totalHeroes: get(state.data, 'total', 0),
});

CharactersList.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  totalHeroes: PropTypes.number,
  fetchCharacters: PropTypes.func,
};

export default withRouter(connect(mapStateToProps)(CharactersList));

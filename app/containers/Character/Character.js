import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import get from 'lodash/get';
import CharacterInfos from '../../components/CharacterInfos';
import getMedia from '../../utils/getMedia';
import {
  fetchOneCharacter,
} from '../../api/fetch';

export class Character extends PureComponent {

  componentWillMount() {
    this.props.fetchCharacter(+this.props.location.pathname.match(/\/([\d]+)/)[1]);
  }

  render() {
    return (
      <div className="character">
        <span className="body__title">Fiche d'identité: </span>
        {this.props.selected
          ? <CharacterInfos
            name={this.props.selected.name}
            description={this.props.selected.description}
            media={getMedia(get(this.props.selected, 'thumbnail'))}
            comics={this.props.selected.comics.items}
            series={this.props.selected.series.items}
          />
          : <div>Character Loading...</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: get(state.data, 'results', []),
  selected: get(state.data, 'selectedChar'),
});

const mapDispatchToProps = dispatch => ({
  fetchCharacter: (id) => dispatch(fetchOneCharacter(id)),
});

Character.propTypes = {
  data: PropTypes.array,
  location: PropTypes.object,
  fetchCharacter: PropTypes.func,
  selected: PropTypes.object,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Character));

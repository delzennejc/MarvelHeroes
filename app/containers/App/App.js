import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import get from 'lodash/get';
import {
  fetchAllCharacters,
} from '../../api/fetch';

export class App extends PureComponent {

  componentWillMount() {
    if (get(this.props.location, 'query.page')) {
      this.props.fetchCharacters(+this.props.location.query.page);
    } else {
      this.props.fetchCharacters();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (get(nextProps.location, 'query.page')) {
      nextProps.fetchCharacters(+nextProps.location.query.page);
    }
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="app">
        <header>
          {(this.props.location.pathname !== '/')
            ? <Link className="return" to="/">Return to the List</Link>
            : null
          } <h1>Marvel Heroes</h1>
        </header>
        <div className="app__content">
          {this.props.children}
        </div>
        <footer>Baked with love!</footer>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchCharacters: (offset) => dispatch(fetchAllCharacters(offset)),
});

App.propTypes = {
  children: PropTypes.element,
  fetchCharacters: PropTypes.func,
  location: PropTypes.object,
};

export default connect(null, mapDispatchToProps)(App);

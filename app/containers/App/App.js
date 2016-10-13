import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  fetchAllCharacters,
} from '../../api/fetch';

export class App extends PureComponent {

  componentWillMount() {
    this.props.fetchCharacters();
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

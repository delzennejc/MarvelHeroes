import React, { Component } from 'react';
import Container from '../containers/container';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>React Redux Boilerplate</header>
        {this.props.children}
        <footer>Baked with love!</footer>
      </div>
    );
  }
};

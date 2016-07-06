import React, {Component} from 'react';
import { connect } from 'react-redux';

class Container extends Component {
  render(){
    return (
      <div>React + Redux = Love</div>
    )
  }
};

export default connect( state => ({ state }) )(Container);

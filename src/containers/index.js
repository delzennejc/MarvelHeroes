import React, {Component} from 'react';
import { connect } from 'react-redux';

class Index extends Component {
  render(){
    return (
      <div>React Redux Boilerplates</div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Index);

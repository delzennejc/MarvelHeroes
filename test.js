import React, {Component} from 'react';

class MyComp extends Component {
  componentDidMount(){
    this.refs.main.value = "Yep";
  }

  render(){
    return (
      <div ref="main" >Hello World</div>
    )
  }
}

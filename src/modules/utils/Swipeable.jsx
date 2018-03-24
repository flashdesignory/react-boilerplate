import React, { Component } from 'react';

class Swipeable extends Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(event) {
    console.log("handleOnClick()");
  }
  render(){
    return (
      <div className="swipeable" onClick={this.handleOnClick}>
        {this.props.children}
      </div>
    )
  }
}
export default Swipeable;

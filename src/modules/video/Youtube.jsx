import React, { Component } from 'react';
import './Youtube.scss';

class Youtube extends Component{
  constructor(props){
    super(props);
    this.state={
      visible:false
    }
  }
  componentDidMount(){
    console.log("componentDidMount()");
    this.setState({
      visible:true
    })
  }
  componentWillUnmount(){
    this.setState({
      visible: false
    })
  }
  render(){
    return (
      <div className={"video-container"}>
        <div className="youtube-container">
          <div className="youtube-player" ref="youtube-player"></div>
        </div>
        <a className="video-container-close" onClick={this.props.onClose}><span className="icon-close"></span></a>
      </div>
    )
  }
}

export default Youtube;

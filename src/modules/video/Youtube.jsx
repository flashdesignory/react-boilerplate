import React, { Component } from 'react';
import './Youtube.scss';

class Youtube extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="video-container">
        <div className="youtube-container">
          <div className="youtube-player" ref="youtube-player"></div>
        </div>
        <a className="video-container-close" href="#"><span className="icon-close"></span></a>
      </div>
    )
  }
}

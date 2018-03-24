import React, { Component } from 'react';
import Swipeable from '../utils/Swipeable';
import './GalleryImage.scss';

class GalleryImage extends Component {
  constructor(props){
    super(props);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }
  handleAnimationEnd(event){
    this.props.handleAnimationEnd(event);
  }
  render(){
    let {url, imageClass} = this.props;
    return (
      <Swipeable>
        <div className={"image-container" + imageClass} onAnimationEnd={this.handleAnimationEnd}>
          <div className="image-preloader"></div>
          <div className="image-element" style={{ backgroundImage: `url(${url})` }}></div>
        </div>
      </Swipeable>
    )
  }
}

export default GalleryImage;

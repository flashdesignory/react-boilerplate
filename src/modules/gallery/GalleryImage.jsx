import React, { Component } from 'react';
import Loader from '../loader/Loader';
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
      <Swipeable handleLeftSwipe={this.props.handleLeftSwipe} handleRightSwipe={this.props.handleRightSwipe}>
        <div className={"image-container" + imageClass} onAnimationEnd={this.handleAnimationEnd}>
          <Loader />
          <div className="image-element" style={{ backgroundImage: `url(${url})` }}></div>
        </div>
      </Swipeable>
    )
  }
}

export default GalleryImage;

import React, { Component } from 'react';
import GalleryImage from './GalleryImage';
import './Gallery.scss';

class Gallery extends Component {
  constructor(props){
    super(props);
    this.images = props.images;
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(event){
    console.log("handleOnClick()");
  }
  render(){
    return (
      <div className="gallery-inner">
        <div className="gallery-images">
          {this.images.map(
            (image) => <GalleryImage key={image.id} {...image}/>
          )}
        </div>
      </div>
    )
  }
}

export default Gallery;

/*<a ref="gallery-prev" onClick={this.handleOnClick}><span className="icon-circle-left"></span></a>
<a ref="gallery-next" onClick={this.handleOnClick}><span className="icon-circle-right"></span></a>*/

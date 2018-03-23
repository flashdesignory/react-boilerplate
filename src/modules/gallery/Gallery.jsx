import React, { Component } from 'react';
import GalleryImage from './GalleryImage';

class Gallery extends Component {
  constructor(props){
    super(props);
    this.images = props.images;
  }
  render(){
    return (
      <div className="gallery-inner">
        <h2>Gallery</h2>
        {this.images.map(
          (image) => <GalleryImage key={image.id} url={image.url}/>
        )}
      </div>
    )
  }
}

export default Gallery;

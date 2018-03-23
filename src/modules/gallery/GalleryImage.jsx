import React from 'react';
import './GalleryImage.scss';

const GalleryImage = (props) => {
  let {url} = props;
  return (
    <div className="image-container">
      <div className="image-preloader"></div>
      <div className="image-element" style={{ backgroundImage: `url(${url})` }}></div>
    </div>
  )
}

export default GalleryImage;

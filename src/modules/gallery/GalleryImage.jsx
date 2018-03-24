import React from 'react';
import './GalleryImage.scss';

const GalleryImage = (props) => {
  let {url, imageClass} = props;
  return (
    <div className={"image-container" + imageClass}>
      <div className="image-preloader"></div>
      <div className="image-element" style={{ backgroundImage: `url(${url})` }}></div>
    </div>
  )
}

export default GalleryImage;

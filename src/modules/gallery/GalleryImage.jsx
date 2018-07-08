import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/Loader';
import Swipeable from '../utils/Swipeable';
import './GalleryImage.scss';

class GalleryImage extends Component {
  constructor(props) {
    super(props);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }

  handleAnimationEnd(event) {
    const { handleAnimationEnd } = this.props;
    handleAnimationEnd(event);
  }

  render() {
    const {
      url, imageClass, handleLeftSwipe, handleRightSwipe,
    } = this.props;
    return (
      <Swipeable handleLeftSwipe={handleLeftSwipe} handleRightSwipe={handleRightSwipe}>
        <div className={`image-container${imageClass}`} onAnimationEnd={this.handleAnimationEnd}>
          <Loader />
          <div className="image-element" style={{ backgroundImage: `url(${url})` }} />
        </div>
      </Swipeable>
    );
  }
}

GalleryImage.defaultProps = {
  handleLeftSwipe: () => {},
  handleRightSwipe: () => {},
  handleAnimationEnd: () => {},
  url: '',
  imageClass: '',
};

GalleryImage.propTypes = {
  handleLeftSwipe: PropTypes.func,
  handleRightSwipe: PropTypes.func,
  handleAnimationEnd: PropTypes.func,
  url: PropTypes.string,
  imageClass: PropTypes.string,
};

export default GalleryImage;

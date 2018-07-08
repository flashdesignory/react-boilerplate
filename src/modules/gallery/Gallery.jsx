import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryImage from './GalleryImage';
import './Gallery.scss';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      prevIndex: -1,
      isTransitioning: false,
    };
    this.data = props.images;
    this.loop = props.loop;
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.move = this.move.bind(this);
  }

  prev(event) {
    console.log('prev()');
    const { currentIndex } = this.state;
    let nextIndex = currentIndex - 1;

    if (this.loop) {
      if (nextIndex < 0) {
        nextIndex = this.data.length - 1;
      }
      this.move(nextIndex);
    } else if (nextIndex >= 0) {
      this.move(nextIndex);
    }

    if (event) event.preventDefault();
  }

  next(event) {
    console.log('next()');
    const { currentIndex } = this.state;
    let nextIndex = currentIndex + 1;

    if (this.loop) {
      if (nextIndex >= this.data.length) {
        nextIndex = 0;
      }
      this.move(nextIndex);
    } else if (nextIndex < this.data.length) {
      this.move(nextIndex);
    }

    if (event) event.preventDefault();
  }

  move(index) {
    let { isTransitioning, currentIndex, prevIndex } = this.state;

    if (isTransitioning) return;
    isTransitioning = true;
    prevIndex = currentIndex;
    currentIndex = index;

    this.setState({
      isTransitioning: false,
      currentIndex,
      prevIndex,
    });
  }

  handleAnimationEnd() {
    this.funcName = 'handleAnimationEnd'; // hack... doesn't feel right...
    //  console.log("handleAnimationEnd()");
  }

  renderImage(image, index) {
    let imageClass;
    const { currentIndex, prevIndex } = this.state;
    if (currentIndex === index) {
      if (prevIndex === -1) {
        imageClass = ' active moveFromRight';
      } else if (prevIndex > currentIndex) {
        imageClass = ' active moveFromLeft';
      } else {
        imageClass = ' active moveFromRight';
      }
    } else if (prevIndex === index) {
      if (currentIndex > prevIndex) {
        imageClass = ' active moveToLeft';
      } else {
        imageClass = ' active moveToRight';
      }
    } else {
      imageClass = '';
    }

    return (
      <GalleryImage
        key={image.id}
        {...image}
        imageClass={imageClass}
        handleAnimationEnd={this.handleAnimationEnd}
        handleLeftSwipe={this.next}
        handleRightSwipe={this.prev}
      />
    );
  }

  render() {
    const { currentIndex } = this.state;
    const prevButtonClasses = currentIndex === 0 ? 'gallery-button left inactive' : 'gallery-button left';
    const nextButtonClasses = currentIndex === this.data.length - 1 ? 'gallery-button right inactive' : 'gallery-button right';
    return (
      <div className="gallery-inner">
        <div className="gallery-images">
          {this.data.map(
            (image, index) => this.renderImage(image, index),
          )}
        </div>
        <button
          ref={this.prevButton}
          type="button"
          className={prevButtonClasses}
          tabIndex={0}
          onClick={this.prev}
          onKeyUp={this.prev}
        >
          <div className="icon-circle-left" />
        </button>
        <button
          ref={this.nextButton}
          className={nextButtonClasses}
          type="button"
          tabIndex={0}
          onClick={this.next}
          onKeyUp={this.next}
        >
          <div className="icon-circle-right" />
        </button>
      </div>
    );
  }
}

Gallery.defaultProps = {
  images: [],
  loop: false,
};

Gallery.propTypes = {
  images: PropTypes.array,
  loop: PropTypes.bool,
};

export default Gallery;

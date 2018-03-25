import React, { Component } from 'react';
import GalleryImage from './GalleryImage';
import './Gallery.scss';

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex : 0,
      prevIndex: -1,
      isTransitioning : false
    }
    this.data = props.images;
    this.loop = props.loop;
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.move = this.move.bind(this);
  }
  prev(event){
    console.log("prev()");
    let nextIndex = this.state.currentIndex - 1;

    if(this.loop){
      if(nextIndex < 0){
        nextIndex = this.data.length-1;
      }
      this.move(nextIndex);
    }else{
      if(nextIndex >= 0){
        this.move(nextIndex);
      }
    }

    if(event) event.preventDefault();
  }
  next(event){
    console.log("next()");
    let nextIndex = this.state.currentIndex + 1;

    if(this.loop){
      if(nextIndex >= this.data.length){
        nextIndex = 0;
      }
      this.move(nextIndex);
    }else{
      if(nextIndex < this.data.length){
        this.move(nextIndex);
      }
    }

    if(event) event.preventDefault();
  }
  move(index){
    let { isTransitioning, currentIndex, prevIndex } = this.state;
    //console.log("move(" + index + ", " + currentIndex + ", " + prevIndex + "," + isTransitioning + ")");

    if(isTransitioning) return;
    isTransitioning = true;
    prevIndex = currentIndex;
    currentIndex = index;

    this.setState({
      isTransitioning:false,
      currentIndex,
      prevIndex
    })
  }
  handleAnimationEnd(event){
  //  console.log("handleAnimationEnd()");
  }
  renderImage(image, index){
    let imageClass;
    let { currentIndex, prevIndex } = this.state;
    if(currentIndex === index){
      if(prevIndex === -1){
        imageClass = " active moveFromRight";
      }else{
        prevIndex > currentIndex ? imageClass = " active moveFromLeft" : imageClass = " active moveFromRight";
      }
    }else if(prevIndex === index){
      currentIndex > prevIndex ? imageClass = " active moveToLeft" : imageClass = " active moveToRight";
    }else{
      imageClass = "";
    }

   return <GalleryImage key={image.id} {...image}
            imageClass={imageClass}
            handleAnimationEnd={this.handleAnimationEnd}
            handleLeftSwipe={this.next}
            handleRightSwipe={this.prev}
          />
  }
  render(){
    let prevButtonClasses = this.state.currentIndex === 0 ? "gallery-button left inactive" : "gallery-button left";
    let nextButtonClasses = this.state.currentIndex === this.data.length-1 ? "gallery-button right inactive" : "gallery-button right";
    return (
      <div className="gallery-inner">
        <div className="gallery-images">
          {this.data.map(
            (image, index) => this.renderImage(image, index)
          )}
        </div>
        <a ref="gallery-prev" className={prevButtonClasses} onClick={this.prev}><div className="icon-circle-left"></div></a>
        <a ref="gallery-next" className={nextButtonClasses} onClick={this.next}><div className="icon-circle-right"></div></a>
      </div>
    )
  }
}

export default Gallery;

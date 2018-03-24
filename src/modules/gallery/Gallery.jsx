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
    console.log("move(" + index + ", " + currentIndex + ", " + prevIndex + "," + isTransitioning + ")");

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
  render(){
    return (
      <div className="gallery-inner">
        <div className="gallery-images">
          {this.data.map(
            (image, index) => {
              let imageClass;
              if(this.state.currentIndex === index){
                imageClass = " active";
              }else if(this.state.prevIndex === index){
                imageClass = ""
              }else{
                imageClass = "";
              }
              return <GalleryImage key={image.id} {...image} imageClass={imageClass}/>
            }
          )}
        </div>
        <a ref="gallery-prev" className="gallery-button left" onClick={this.prev}><div className="icon-circle-left"></div></a>
        <a ref="gallery-next" className="gallery-button right" onClick={this.next}><div className="icon-circle-right"></div></a>
      </div>
    )
  }
}

export default Gallery;

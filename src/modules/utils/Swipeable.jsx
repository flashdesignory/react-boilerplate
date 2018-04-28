import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Swipeable extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMoving:false
    }

    this.startX = null;
		this.currentX = null;
		this.offset = 20;

    this.handleOnTouchStart = this.handleOnTouchStart.bind(this);
    this.handleOnTouchMove = this.handleOnTouchMove.bind(this);
    this.handleOnTouchEnd = this.handleOnTouchEnd.bind(this);
  }
  handleOnTouchStart(event){
    if(!this.state.isMoving) {
				this.startX = event.touches[0].pageX;
				this.currentX = this.startX;

        this.setState({
          isMoving:true
        })
			}
			event.preventDefault();
  }
  handleOnTouchMove(event){
    if(this.state.isMoving) {
				this.currentX = event.touches[0].pageX;
			}
  }
  handleOnTouchEnd(event){
    this.evaluate();
		this.starX = null;
		this.setState({
      isMoving:false
    })
		event.preventDefault();
  }
  evaluate(){
		let x = this.currentX;
		let dx = x - this.startX;
		let ax = Math.abs(dx);

		let toright = dx > 0 ? true : false;

		if(ax >= this.offset) {
			if(toright) {
				console.log("right swipe");
        this.props.handleRightSwipe();
			} else {
				console.log("left swipe");
        this.props.handleLeftSwipe();
			}
		}
  }
  render(){
    return (
      <div className="swipeable"
        onTouchStart={this.handleOnTouchStart}
        onTouchMove={this.handleOnTouchMove}
        onTouchEnd={this.handleOnTouchEnd}
        >
        {this.props.children}
      </div>
    )
  }
}

Swipeable.defaultProps = {
  handleRightSwipe: () => {},
  handleLeftSwipe: () => {}
}

Swipeable.propTypes = {
  handleRightSwipe: PropTypes.func,
  handleLeftSwipe: PropTypes.func
}

export default Swipeable;

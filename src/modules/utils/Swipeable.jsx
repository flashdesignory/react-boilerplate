import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Swipeable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoving: false,
    };

    this.startX = null;
    this.currentX = null;
    this.offset = 20;

    this.handleOnTouchStart = this.handleOnTouchStart.bind(this);
    this.handleOnTouchMove = this.handleOnTouchMove.bind(this);
    this.handleOnTouchEnd = this.handleOnTouchEnd.bind(this);
  }

  handleOnTouchStart(event) {
    const { isMoving } = this.state;
    if (!isMoving) {
      this.startX = event.touches[0].pageX;
      this.currentX = this.startX;

      this.setState({
        isMoving: true,
      });
    }
    event.preventDefault();
  }

  handleOnTouchMove(event) {
    const { isMoving } = this.state;
    if (isMoving) {
      this.currentX = event.touches[0].pageX;
    }
  }

  handleOnTouchEnd(event) {
    this.evaluate();
    this.starX = null;
    this.setState({
      isMoving: false,
    });
    event.preventDefault();
  }

  evaluate() {
    const { handleRightSwipe, handleLeftSwipe } = this.props;
    const x = this.currentX;
    const dx = x - this.startX;
    const ax = Math.abs(dx);
    const toright = dx > 0;

    if (ax >= this.offset) {
      if (toright) {
        console.log('right swipe');
        handleRightSwipe();
      } else {
        console.log('left swipe');
        handleLeftSwipe();
      }
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div
        className="swipeable"
        onTouchStart={this.handleOnTouchStart}
        onTouchMove={this.handleOnTouchMove}
        onTouchEnd={this.handleOnTouchEnd}
      >
        {children}
      </div>
    );
  }
}

Swipeable.defaultProps = {
  handleRightSwipe: () => {},
  handleLeftSwipe: () => {},
  children: {},
};

Swipeable.propTypes = {
  handleRightSwipe: PropTypes.func,
  handleLeftSwipe: PropTypes.func,
  children: PropTypes.node,
};

export default Swipeable;

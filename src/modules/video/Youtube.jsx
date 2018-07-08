import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Youtube.scss';

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.videoId = props.videoId;

    /* this.state = {
      visible: false,
    }; */

    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.onPlayerError = this.onPlayerError.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
  }

  componentDidMount() {
    if (!window.YT) this.init();
    else this.addPlayer();

    /* this.setState({
      visible: true,
    }); */
  }

  componentWillUnmount() {
    /* this.setState({
      visible: false,
    }); */
  }

  onPlayerStateChange(event) {
    console.log(event);
    switch (event.data) {
      case window.YT.PlayerState.PLAYING:
        if (this.cleanTime() === 0) {
          console.log(`started ${this.player.getCurrentTime()}`);
        } else {
          console.log(`playing ${this.player.getCurrentTime()}`);
        }
        break;
      case window.YT.PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() !== 0) {
          console.log(`${'paused @ '}${this.player.getCurrentTime()}`);
        }
        break;
      case window.YT.PlayerState.ENDED:
        console.log('ended ');
        break;
      default:
    }
  }

  onPlayerError(event) {
    this.funcName = 'onPlayerError'; // hack... doesn't feel right...
    switch (event.data) {
      case 2:
        break;
      case 100:
        break;
      case 101 || 150:
        break;
      default:
    }
  }

  onPlayerReady() {
    this.funcName = 'onPlayerReady'; // hack... doesn't feel right...
    console.log('onPlayerReady()');
  }

  init() {
    console.log('init()');
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      this.addPlayer();
    };
  }

  addPlayer() {
    this.player = new window.YT.Player('player', {
      videoId: this.videoId,
      events: {
        onStateChange: this.onPlayerStateChange,
        onError: this.onPlayerError,
        onReady: this.onPlayerReady,
      },
    });
  }

  render() {
    const { onClose } = this.props;
    return (
      <div className="video-container">
        <div className="youtube-container">
          <div className="youtube-player" ref={this.playerRef} id="player" />
        </div>
        <button
          className="video-container-close"
          type="button"
          tabIndex={0}
          onClick={onClose}
          onKeyUp={onClose}
        >
          <span className="icon-close" />
        </button>
      </div>
    );
  }
}

Youtube.defaultProps = {
  videoId: '',
  onClose: () => {},
};

Youtube.propTypes = {
  videoId: PropTypes.string,
  onClose: PropTypes.func,
};

export default Youtube;

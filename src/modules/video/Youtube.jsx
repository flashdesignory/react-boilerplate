import React, { Component } from 'react';
import './Youtube.scss';

class Youtube extends Component{
  constructor(props){
    super(props);

    this.videoId = props.videoId;

    this.state={
      visible:false
    }

    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.onPlayerError = this.onPlayerError.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
  }
  onPlayerStateChange(event) {
    console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.player.getCurrentTime());
        } else {
          console.log('playing ' +this.player.getCurrentTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' +this.player.getCurrentTime());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    };
  };
  onPlayerError(event) {
    switch (event.data) {
      case 2:
      break;
      case 100:
      break;
      case 101 || 150:
      break;
    };
  };
  onPlayerReady(event){
    console.log("onPlayerReady()");
  }
  init() {
    console.log("init()");
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.addPlayer();
    };
  }
  addPlayer(){
    this.player = new window['YT'].Player('player', {
      videoId: this.videoId,
      events: {
        'onStateChange': this.onPlayerStateChange,
        'onError': this.onPlayerError,
        'onReady': this.onPlayerReady
      }
    });
  }
  componentDidMount(){
    if(!window['YT']) this.init();
    else this.addPlayer();

    this.setState({
      visible:true
    })
  }
  componentWillUnmount(){
    this.setState({
      visible: false
    })
  }
  render(){
    const { onClose } = this.props;
    return (
      <div className={"video-container"}>
        <div className="youtube-container">
          <div className="youtube-player" ref="youtubePlayer" id="player"></div>
        </div>
        <a className="video-container-close" onClick={onClose}><span className="icon-close"></span></a>
      </div>
    )
  }
}

export default Youtube;

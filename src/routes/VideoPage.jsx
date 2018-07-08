import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './VideoPage.scss';

import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';
import Youtube from '../modules/video/Youtube';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayVisible: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnClick() {
    console.log('handleOnClick()');
    const { overlayVisible } = this.state;
    if (!overlayVisible) {
      this.setState({
        overlayVisible: true,
      });
    }
  }

  handleOnClose() {
    console.log('handleOnClose()');
    const { overlayVisible } = this.state;
    if (overlayVisible) {
      this.setState({
        overlayVisible: false,
      });
    }
  }

  render() {
    const {
      header, footer, trailer: { id }, landing: { trailer },
    } = this.props;
    const { overlayVisible } = this.state;
    // const { id } = trailer;
    console.log(`id: ${id}`);
    return (
      <div className="page video">
        <Header {...header} />
        <main>
          <section className="content">
            <div className="content-inner">
              <div
                className="video-page-trailer-button"
                role="button"
                tabIndex={0}
                onClick={this.handleOnClick}
                onKeyUp={this.handleOnClick}
              >
                {trailer}
              </div>
            </div>
          </section>
        </main>
        <Footer {...footer} />
        {
          overlayVisible && (
          <Youtube
            videoId={id}
            onClose={this.handleOnClose}
          />
          )
        }
      </div>
    );
  }
}

VideoPage.defaultProps = {
  landing: {
    trailer: '',
  },
  trailer: {
    id: '',
  },
  header: {},
  footer: {},
};

VideoPage.propTypes = {
  landing: PropTypes.shape({
    trailer: PropTypes.string,
  }),
  trailer: PropTypes.shape({
    id: PropTypes.string,
  }),
  header: PropTypes.object,
  footer: PropTypes.object,
};

export default VideoPage;

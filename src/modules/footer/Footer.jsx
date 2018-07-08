import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';
import SocialNav from '../social/SocialNav';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.openLegal = this.openLegal.bind(this);
    this.closeLegal = this.closeLegal.bind(this);
  }

  openLegal() {
    console.log('openLegal()');
    this.setState({
      expanded: true,
    });
  }

  closeLegal() {
    console.log('closeLegal()');
    this.setState({
      expanded: false,
    });
  }

  render() {
    const { expanded } = this.state;
    const { legal } = this.props;
    return (
      <div className={expanded ? 'footer-container expanded' : 'footer-container'}>
        <footer>
          <div className="footer-inner">
            <div className="footer-left">
              <button
                className="footer-open"
                type="button"
                tabIndex={0}
                onClick={this.openLegal}
                onKeyUp={this.openLegal}
              >
                legal
              </button>
            </div>
            <div className="footer-center">
              <div className="copyright">
                {legal}
              </div>
            </div>
            <div className="footer-right">
              <SocialNav />
            </div>
          </div>
        </footer>
        <div className={expanded ? 'footer-legal expanded' : 'footer-legal'}>
          <button
            className="footer-close"
            type="button"
            tabIndex={0}
            onClick={this.closeLegal}
            onKeyUp={this.closeLegal}
          >
            <span className="icon-close" />
          </button>
        </div>
      </div>
    );
  }
}

Footer.defaultProps = {
  legal: 'All Rights Reserved',
};

Footer.propTypes = {
  legal: PropTypes.string,
};

export default Footer;

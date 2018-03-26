import React from 'react';
import './Footer.scss';
import SocialNav from '../social/SocialNav';

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <a id="footer-open" href="#">legal</a>
        </div>
        <div className="footer-center">
          <div className="copyright">{props.legal}</div>
        </div>
        <div className="footer-right">
          <SocialNav/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

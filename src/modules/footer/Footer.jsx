import React from 'react';
import './Footer.scss';

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
          <a id="footer-social" href="#">social</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

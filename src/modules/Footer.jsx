import React from 'react';
import './Footer.scss';

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-center">
        <div className="copyright">{props.legal}</div>
      </div>
    </footer>
  )
}

export default Footer;

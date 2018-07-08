import React from 'react';
import './SocialNav.scss';

const SocialNav = () => (
  <div className="social-buttons-container">
    <ul id="social-buttons">
      <li>
        <a href="http://wwww.facebook.com" rel="noopener noreferrer" target="_blank">
          <span className="icon-facebook" />
        </a>
      </li>
      <li>
        <a href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <span className="icon-twitter" />
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <span className="icon-instagram" />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialNav;

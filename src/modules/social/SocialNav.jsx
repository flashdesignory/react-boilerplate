import React from 'react';
import './SocialNav.scss';

const SocialNav = (props) => {
    return (
      <div className="social-buttons-container">
        <ul id="social-buttons">
					<li><a href="http://wwww.facebook.com" target="_blank"><span className="icon-facebook"></span></a></li>
					<li><a href="http://www.twitter.com" target="_blank"><span className="icon-twitter"></span></a></li>
					<li><a href="http://www.instagram.com" target="_blank"><span className="icon-instagram"></span></a></li>
				</ul>
      </div>
    )
}

export default SocialNav;

import React from 'react';
import './SocialNav.scss';

const SocialNav = (props) => {
    return (
      <div className="social-buttons-container">
        <ul id="social-buttons">
					<li><a href="http://wwww.facebook.com" target="_blank"><span class="icon-facebook"></span></a></li>
					<li><a href="http://www.twitter.com" target="_blank"><span class="icon-twitter"></span></a></li>
					<li><a href="http://www.instagram.com" target="_blank"><span class="icon-instagram"></span></a></li>
				</ul>
      </div>
    )
}

export default SocialNav;

import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-center">
        <div className="title"><h1>React Boilerplate!</h1></div>
        <nav>
          <ul>
            <li><NavLink exact={true} to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/video">Video</NavLink></li>
          </ul>
        </nav>
    </div>
    </header>
  )
}

export default Header;

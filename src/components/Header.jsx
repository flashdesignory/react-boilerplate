import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>React Boilerplate</h1>
      <ul>
        <li><NavLink exact={true} to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/video">Video</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;

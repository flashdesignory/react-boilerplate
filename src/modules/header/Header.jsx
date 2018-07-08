import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <div className="header-inner">
        <div className="title">
          <Link to="/">
            <h1>
              {title}
            </h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/video">
                Video
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'title',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

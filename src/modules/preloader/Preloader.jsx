import React from 'react';
import './Preloader.scss';

const Preloader = () => (
  <div className="preloader">
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  </div>
);

export default Preloader;

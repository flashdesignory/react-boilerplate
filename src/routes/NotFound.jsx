import React from 'react';
import PropTypes from 'prop-types';
import './NotFound.scss';
import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';

const NotFound = (props) => {
  const { header, footer } = props;
  return (
    <div className="page notfound">
      <Header {...header} />
      <main>
        <section className="content">
          <div className="content-inner">
            <h1>
              404
            </h1>
            <p>
              ...
            </p>
          </div>
        </section>
      </main>
      <Footer {...footer} />
    </div>
  );
};

NotFound.defaultProps = {
  header: {},
  footer: {},
};

NotFound.propTypes = {
  header: PropTypes.object,
  footer: PropTypes.object,
};

export default NotFound;

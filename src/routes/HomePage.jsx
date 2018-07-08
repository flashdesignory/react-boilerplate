import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';
import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';

const HomePage = (props) => {
  const { header, footer } = props;
  return (
    <div className="page home">
      <Header {...header} />
      <main>
        <section className="content">
          <div className="content-inner">
            <h1>
              Welcome
            </h1>
          </div>
        </section>
      </main>
      <Footer {...footer} />
    </div>
  );
};

HomePage.defaultProps = {
  header: {},
  footer: {},
};

HomePage.propTypes = {
  header: PropTypes.object,
  footer: PropTypes.object,
};

export default HomePage;

import React from 'react';
import PropTypes from 'prop-types';
import './AboutPage.scss';

import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';

const AboutPage = (props) => {
  const { header, footer, about } = props;
  const { synopsis } = about;
  return (
    <div className="page about">
      <Header {...header} />
      <main>
        <section className="content">
          <div className="content-inner">
            <h2>
              About
            </h2>
            <p>
              { synopsis }
            </p>
          </div>
        </section>
      </main>
      <Footer {...footer} />
    </div>
  );
};

AboutPage.defaultProps = {
  about: {},
  header: {},
  footer: {},
};

AboutPage.propTypes = {
  about: PropTypes.object, // eslint-disable-line is-forbidden
  header: PropTypes.object, // eslint-disable-line is-forbidden
  footer: PropTypes.object, // eslint-disable-line is-forbidden
};

export default AboutPage;

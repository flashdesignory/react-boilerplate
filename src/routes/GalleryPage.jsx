import React from 'react';
import PropTypes from 'prop-types';
import './GalleryPage.scss';

import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';
import Gallery from '../modules/gallery/Gallery';

const GalleryPage = (props) => {
  const { header, footer, gallery } = props;
  return (
    <div className="page gallery">
      <Header {...header} />
      <main>
        <section className="content">
          <div className="content-inner">
            <Gallery loop={false} {...gallery} />
          </div>
        </section>
      </main>
      <Footer {...footer} />
    </div>
  );
};

GalleryPage.defaultProps = {
  gallery: {},
  header: {},
  footer: {},
};

GalleryPage.propTypes = {
  gallery: PropTypes.object,
  header: PropTypes.object,
  footer: PropTypes.object,
};

export default GalleryPage;

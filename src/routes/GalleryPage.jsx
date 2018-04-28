import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GalleryPage.scss';

import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';
import Gallery from '../modules/gallery/Gallery';

class GalleryPage extends Component {
	render(){
		return (
			<div className="page gallery">
				<Header {...this.props.header}/>
				<main>
					<section className={"content"}>
						<div className="content-inner">
							<Gallery loop={false} {...this.props.gallery}/>
						</div>
					</section>
				</main>
				<Footer {...this.props.footer}/>
			</div>
		)
	}
}

GalleryPage.defaultProps = {
  gallery: {},
  header: {},
  footer: {}
}

GalleryPage.propTypes = {
  gallery: PropTypes.object,
  header: PropTypes.object,
  footer: PropTypes.object
}

export default GalleryPage;

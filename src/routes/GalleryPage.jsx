import React, { Component } from 'react';
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

export default GalleryPage;
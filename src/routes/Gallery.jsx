import React, { Component } from 'react';
import './Gallery.scss';

import Header from '../modules/Header';
import Footer from '../modules/Footer';

class Gallery extends Component {
	render(){
		return (
			<div className="page gallery">
				<Header/>
				<main>
					<section className={"content"}>
						<div className="content-inner">
							<h2>Gallery</h2>
							<p>Lorem ipsum...</p>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		)
	}
}

export default Gallery;

import React, { Component } from 'react';
import './Gallery.scss';

import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';

class Gallery extends Component {
	render(){
		return (
			<div className="page gallery">
				<Header {...this.props.header}/>
				<main>
					<section className={"content"}>
						<div className="content-inner">
							<h2>Gallery</h2>
							<p>Lorem ipsum...</p>
						</div>
					</section>
				</main>
				<Footer {...this.props.footer}/>
			</div>
		)
	}
}

export default Gallery;

import React, { Component } from 'react';
import './Video.scss';

import Header from '../modules/Header';
import Footer from '../modules/Footer';

class Video extends Component {
	render(){
		return (
			<div className="page video">
				<Header/>
				<main>
					<section className={"content"}>
						<div className="content-inner">
							<h2>Video</h2>
							<p>Lorem ipsum...</p>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		)
	}
}

export default Video;

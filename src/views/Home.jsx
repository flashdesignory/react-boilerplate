import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
	render(){
		return (
			<div>
				<Header />
				<div className="content">
					<h2>Home</h2>
					<p>Lorem ipsum...</p>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Home;

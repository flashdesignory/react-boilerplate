import React, { Component } from 'react';
import './HomePage.scss';
import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';

class HomePage extends Component {
	render(){
		return (
			<div className="page home">
				<Header {...this.props.header}/>
				<main>
					<section className={"content"}>
						<div className="content-inner">
							<h1>Welcome</h1>
						</div>
					</section>
				</main>
				<Footer {...this.props.footer}/>
			</div>
		)
	}
}

export default HomePage;

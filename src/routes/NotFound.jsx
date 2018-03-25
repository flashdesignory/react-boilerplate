import React, { Component } from 'react';
import './NotFound.scss';
import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';

class NotFound extends Component{
  render(){
    return (
      <div className="page notfound">
				<Header {...this.props.header}/>
				<main>
					<section className={"content"}>
						<div className="content-inner">
              <h1>404</h1>
              <p>...</p>
						</div>
					</section>
				</main>
				<Footer {...this.props.footer}/>
			</div>
    )
  }
}

export default NotFound;

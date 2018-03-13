import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Video from './routes/Video';

import './Main.scss';

const Main = ({ location }) => {
  return (
		<div className="container">
			<Header />
				<main>
		      <TransitionGroup className="transition-container">
		        <CSSTransition key={location.key} timeout={1000} classNames="page-transition">
		            <Switch location={location}>
									<Route exact path="/" component={Home} />
									<Route path="/about" component={About} />
									<Route path="/gallery" component={Gallery} />
									<Route path="/video" component={Video} />
		            </Switch>
		        </CSSTransition>
		      </TransitionGroup>
				</main>
			<Footer />
		</div>
  )
}

export default withRouter(Main)

import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Video from './routes/Video';

import './Main.scss';

class Main extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(e){
    console.log("componentDidMount()");
  }
  render(){
    const { location } = this.props;
    return (
  		<div className="container">
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
  		</div>
    )
  }
}

/*const Main = ({ location }) => {
  return (
		<div className="container">
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
		</div>
  )
}*/

export default withRouter(Main)

import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import axios from 'axios';
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Video from './routes/Video';
import Preloader from './modules/Preloader';

import './Main.scss';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data:undefined
    }
  }
  componentDidMount(e){
    console.log("componentDidMount()");
    let startTime = new Date();
    axios.get('files/data/data.json')
      .then(response => {
        console.log(response.data);
        let duration = new Date() - startTime;
        let min = 3000;
        let delay;
        min > duration ? delay = (min-duration) : delay = 0;
        //console.log("delay: " + delay);
        setTimeout(() => {
          this.setState({
            loading: false,
            data: response.data
          })
        }, delay);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render(){
    const { location } = this.props;
    return (
  		<div className="container">
  	      <TransitionGroup className="transition-container">
  	        <CSSTransition key={location.key} timeout={1000} classNames="page-transition">
  	            <Switch location={location}>
  								<Route exact path="/" render={() => this.state.loading ? <Preloader /> : <Home {...this.state.data} />}/>
  								<Route path="/about" render={() => this.state.loading ? <Preloader /> : <About {...this.state.data} />}/>
  								<Route path="/gallery" render={() => this.state.loading ? <Preloader /> : <Gallery {...this.state.data} />}/>
  								<Route path="/video" render={() => this.state.loading ? <Preloader /> : <Video {...this.state.data} />}/>
  	            </Switch>
  	        </CSSTransition>
  	      </TransitionGroup>
  		</div>
    )
  }

  /*render(){
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
  }*/
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

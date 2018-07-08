import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import axios from 'axios';
import WebFont from 'webfontloader';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import GalleryPage from './routes/GalleryPage';
import VideoPage from './routes/VideoPage';
import NotFound from './routes/NotFound';
import Preloader from './modules/preloader/Preloader';

import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
    this.loadData();
    this.loadFonts();
  }

  loadData() {
    const startTime = new Date();
    const minDuration = 3000;
    axios.get('files/data/data.json')
      .then((response) => {
        const duration = new Date() - startTime;
        let delay;
        if (minDuration > duration) {
          delay = (minDuration - duration);
        } else {
          delay = 0;
        }
        setTimeout(() => {
          this.setState({
            loading: false,
            data: response.data,
          });
          document.body.classList.remove('loading');
          document.body.classList.add('loaded');
        }, delay);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadFonts() {
    this.funcName = 'loadFonts'; // hack... doesn't feel right...
    WebFont.load({
      google: {
        families: ['Lato'],
      },
      active() { console.log('font active'); },
    });
  }

  render() {
    const { location } = this.props;
    const { loading, data } = this.state;
    return (
      <div className="container">
        <TransitionGroup className="transition-container">
          <CSSTransition key={location.key} timeout={1000} classNames="page-transition">
            <Switch location={location}>
              <Route exact path="/" render={() => (loading ? <Preloader /> : <HomePage {...data} />)} />
              <Route path="/about" render={() => (loading ? <Preloader /> : <AboutPage {...data} />)} />
              <Route path="/gallery" render={() => (loading ? <Preloader /> : <GalleryPage {...data} />)} />
              <Route path="/video" render={() => (loading ? <Preloader /> : <VideoPage {...data} />)} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }

  /* render(){
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
  } */
}

Main.defaultProps = {
  location: {},
};

Main.propTypes = {
  location: PropTypes.object,
};

/* const Main = ({ location }) => {
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
} */

export default withRouter(Main);

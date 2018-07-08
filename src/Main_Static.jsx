import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './modules/header/Header';
import Footer from './modules/footer/Footer';
import Home from './routes/HomePage';
import About from './routes/AboutPage';
import Gallery from './routes/GalleryPage';
import Video from './routes/VideoPage';

import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    const { history } = this.props;

    this.handleLocationChange = this.handleLocationChange.bind(this);
    history.listen(this.handleLocationChange);
  }

  componentDidMount() {
    const { history } = this.props;
    const { location, action } = history;
    this.handleLocationChange(location, action);
  }

  handleLocationChange(location, action) {
    this.funcName = 'handleLocationChange'; // hack... doesn't feel right...
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
    console.log(`The last navigation action was ${action}`);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/video" component={Video} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

Main.defaultProps = {
  history: {},
};

Main.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Main);

import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Video from './routes/Video';

import './Main.scss';

class Main extends Component {
	constructor(props){
		super(props);

		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.props.history.listen(this.handleLocationChange);
	}

	handleLocationChange(location, action) {
		console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
		console.log(`The last navigation action was ${action}`)
	}

	componentDidMount(){
		this.handleLocationChange(this.props.history.location, this.props.history.action);
	}

	render(){
		console.log(location)
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
		)
	}
}

export default withRouter(Main);

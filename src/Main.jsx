import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Gallery from './views/Gallery';
import Video from './views/Video';

class Main extends Component {
	render(){
		return (
			<div>
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

export default Main;

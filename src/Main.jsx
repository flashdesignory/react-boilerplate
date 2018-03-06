import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Video from './routes/Video';

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

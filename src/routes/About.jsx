import React, { Component } from 'react';
import './About.scss';

import Header from '../modules/Header';
import Footer from '../modules/Footer';

class About extends Component{
  render(){
    return (
      <div className="page about">
        <Header/>
        <main>
          <section className={"content"}>
            <div className="content-inner">
              <h2>About</h2>
              <p>Lorem ipsum...</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default About;

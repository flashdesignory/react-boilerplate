import React, { Component } from 'react';
import './About.scss';

import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';

class About extends Component{
  render(){
    return (
      <div className="page about">
        <Header {...this.props.header}/>
        <main>
          <section className={"content"}>
            <div className="content-inner">
              <h2>About</h2>
              <p>Lorem ipsum...</p>
            </div>
          </section>
        </main>
        <Footer {...this.props.footer}/>
      </div>
    )
  }
}

export default About;

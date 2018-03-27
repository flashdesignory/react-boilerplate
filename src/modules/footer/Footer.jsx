import React, { Component } from 'react';
import './Footer.scss';
import SocialNav from '../social/SocialNav';

class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      expanded:false
    }
    this.openLegal = this.openLegal.bind(this);
    this.closeLegal = this.closeLegal.bind(this);
  }
  openLegal(){
    console.log("openLegal()");
    this.setState({
      expanded:true
    })
  }
  closeLegal(){
    console.log("closeLegal()");
    this.setState({
      expanded:false
    })
  }
  render(){
    return (
      <div className={this.state.expanded? "footer-container expanded" : "footer-container"}>
        <footer>
          <div className="footer-inner">
            <div className="footer-left">
              <a className="footer-open" onClick={this.openLegal}>legal</a>
            </div>
            <div className="footer-center">
              <div className="copyright">{this.props.legal}</div>
            </div>
            <div className="footer-right">
              <SocialNav/>
            </div>
          </div>
        </footer>
        <div className={this.state.expanded? "footer-legal expanded" : "footer-legal"}>
          <a className="footer-close" onClick={this.closeLegal}><span className="icon-close"></span></a>
        </div>
      </div>
    )
  }
}

export default Footer;

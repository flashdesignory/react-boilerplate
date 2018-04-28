import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './VideoPage.scss';

import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';
import Youtube from '../modules/video/Youtube';

class VideoPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			overlayVisible: false,
			videoId: ""
		}
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOnClose = this.handleOnClose.bind(this);
	}
	handleOnClick(event){
		console.log("handleOnClick()");
		if(!this.state.overlayVisible){
			this.setState({
				overlayVisible: true
			})
		}
	}
	handleOnClose(event){
		console.log("handleOnClose()");
		if(this.state.overlayVisible){
			this.setState({
				overlayVisible: false
			})
		}
	}
	render(){
		return (
			<div className="page video">
				<Header {...this.props.header}/>
				<main>
					<section className={"content"}>
						<div className="content-inner">
							<div className="video-page-trailer-button"
								onClick={this.handleOnClick}>{this.props.landing.trailer}</div>
						</div>
					</section>
				</main>
				<Footer {...this.props.footer}/>
				{
					this.state.overlayVisible && (
						<Youtube
							videoId={this.props.trailer.id}
							onClose={this.handleOnClose}/>
					)
				}
			</div>
		)
	}
}

VideoPage.defaultProps = {
  landing: {
		trailer: ""
	},
	trailer: {
		id: ""
	},
  header: {},
  footer: {}
}

VideoPage.propTypes = {
	landing: PropTypes.shape({
		trailer: PropTypes.string
	}),
	trailer: PropTypes.shape({
		id: PropTypes.string
	}),
  header: PropTypes.object,
  footer: PropTypes.object
}

export default VideoPage;

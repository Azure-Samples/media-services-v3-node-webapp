import React from 'react';
import 'shaka-player/dist/controls.css';
const shaka = require('shaka-player/dist/shaka-player.ui.js');

interface ShakaProps {
	src : string
}

//Creating class component
class ShakaPlayer extends React.PureComponent<ShakaProps, {}>{
	videoComponent : any
	videoContainer : any

	constructor(props : any){

		super(props);

		//Creating reference to store video component on DOM
		this.videoComponent = React.createRef();

		//Creating reference to store video container on DOM
		this.videoContainer = React.createRef();

		//Initializing reference to error handlers
		this.onErrorEvent = this.onErrorEvent.bind(this);
		this.onError = this.onError.bind(this);
	}

	onErrorEvent(event : any) {
	  // Extract the shaka.util.Error object from the event.
	  this.onError(event.detail);
	}

	onError(error : any) {
	  // Log the error.
	  console.error('Error code', error.code, 'object', error);
	}

	componentDidMount(){


		//Getting reference to video and video container on DOM
		const video = this.videoComponent.current;
		const videoContainer = this.videoContainer.current;

		//Initialize shaka player
		var player = new shaka.Player(video);

		//Setting UI configuration JSON object
		const uiConfig : any = {};

		//Configuring elements to be displayed on video player control panel
		  uiConfig['controlPanelElements'] = ['play_pause','mute', 'volume', 'time_and_duration', 'fullscreen', 'overflow_menu' ];

		//Setting up shaka player UI
      	const ui = new shaka.ui.Overlay(player, videoContainer, video);

        ui.configure(uiConfig); //configure UI
      	ui.getControls();

		// Listen for error events.
  		player.addEventListener('error', this.onErrorEvent);

  		// Try to load a manifest.
	  	// This is an asynchronous process.
	  	player.load(this.props.src).then(function() {
		    // This runs if the asynchronous load is successful.
		    console.log('The video has now been loaded!');
	  	}).catch(this.onError);  // onError is executed if the asynchronous load fails.

	}

	render(){

		/*
		Returning video with a container. Remember, when setting up shaka player with custom UI, you must
		add your video component inside a container
		The container will be used by shaka player to add your customized UI for the player
		*/
		return(
			<div className="video-container" ref={this.videoContainer}>
				<video
					className="shaka-video"
					ref={this.videoComponent}
					style={{
						maxWidth: '100%',
						width: '100%'
					}}
				/>
			</div>
		)
	}
}

export default ShakaPlayer;
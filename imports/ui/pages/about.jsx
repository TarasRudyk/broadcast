import React from 'react';
import {render} from 'react-dom';



import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class About extends TrackerReact(React.Component) {

  
	render() {
		return (
			<div className="col s6">
				<h1 className="center-align">Motivation letter</h1>
				<p className="center-align letter">Hi, I am Taras. So I have already done this task. 
				I consider that, I made a huge amount of mistakes, but I ready to change, improve 
				my skills in Meteor, React, Angular, HTML, CSS, Mongodb and other technology. Have experience for calm and 
				meticulous work and work in stressful condition. I passionate to learn IT science, as you know IT is new field for me. 
				I am ready for the challenge. Thank you in advance for advice and for the chance to do this task.</p>


			</div>
		)
	}
}

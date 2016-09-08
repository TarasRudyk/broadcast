import React from 'react';
import {render} from 'react-dom';

import '../../api/publications.js';

import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class About extends TrackerReact(React.Component) {

  
	render() {
		return (
			<div>
				<h1>About me</h1>


			</div>
		)
	}
}

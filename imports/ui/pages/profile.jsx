import React from 'react';
import {render} from 'react-dom';

import '../../api/publications.js';

import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Profile extends TrackerReact(React.Component) {

  
	render() {
		return (
			<div>
				<h1>Profile</h1>


			</div>
		)
	}
}

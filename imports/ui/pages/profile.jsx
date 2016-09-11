import React from 'react';
import {render} from 'react-dom';

import '../../api/publications.js';
import '../../api/methods'

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import UpdateName from '../components/updateName';
import UpdateEmail from '../components/updateEmail';



export default class Profile extends TrackerReact(React.Component) {

  handleChange(event) {
  	event.preventDefault();
  	var location = this.refs.locat.value
  
  
    Meteor.call('updateLocation', location);
	}

	render() {
		return (
			<div>
				<h1>Profile</h1> 
				<div className="updateData">
						<span>Email: </span><UpdateEmail />
						<span>Name: </span><UpdateName />
						<span>Location: </span> 
						<select className="location" ref="locat" onChange={this.handleChange.bind(this)}>
							<option defaultValue="n/a">n/a</option>
						  <option value="Kyiv">Kyiv</option>
						  <option value="Kharkiv">Kharkiv</option>
						  <option value="Dnipro">Dnipro</option>
						  <option value="Odesa">Odesa</option>
						  <option value="Ivano-Frankivsk">Ivano-Frankivsk</option>
						  <option value="Lviv">Lviv</option>

						</select>
				</div>

			</div>
		)
	}
}



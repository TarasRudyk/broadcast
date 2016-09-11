import React from 'react';
import {render} from 'react-dom';

import '../../api/publications.js';
import '../../api/methods'

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ProfileData from '../components/profileData.jsx';


export default class Profile extends TrackerReact(React.Component) {

    constructor(){
  	super();

  	this.state = {
  		subscription: {
  			user: Meteor.subscribe("users")
  		}
  	}
  }

  componentWillUnmount() {
      this.state.subscription.user.stop();
  }

	users() {
		return Meteor.users.find().fetch();
	}



  handleChange(event) {
  	event.preventDefault();
  	var location = this.refs.locat.value
  
  
    Meteor.call('updateLocation', location);
	}

	render() {
		return (
			<div>
				<h1>Profile</h1>
					<ul>
						{this.users().map((user)=>{
							return <ProfileData key={user._id} user={user}/>
						})}
					</ul>
				<div className="updateData">
						Location 
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



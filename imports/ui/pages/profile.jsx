import React from 'react';
import {render} from 'react-dom';

import '../../api/publications.js';
import '../../api/methods'

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ProfileData from '../components/profileData';



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





	render() {
		return (
			<div>
				<h1>Profile</h1>
					<ul>
						{this.users().map((user)=>{
							return <ProfileData key={user._id} user={user}/>
						})}
					</ul>
			</div>
		)
	}
}



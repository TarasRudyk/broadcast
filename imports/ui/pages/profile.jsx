import React from 'react';
import {render} from 'react-dom';

import {Users} from '../../api/publications.js';


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
				<div className="row">
						<div className="col s12">
							{this.users().map((user)=>{
								return <ProfileData key={user._id} user={user}/>
							})}
						</div>
				</div>
		)
	}
}



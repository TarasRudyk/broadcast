import React, {Component} from 'react';
import NameUpdate from './updateName';
import EmailUpdate from './updateEmail';
import LocationUpdate from './updateLocation';
import UpdatePassword from './updatePassword'

export default class ProfileData extends Component {

  handleChange(event) {
  	event.preventDefault();
  	var location = this.refs.locat.value
  
  
    Meteor.call('updateLocation', location);
	}


	render(){
		return(
				
				<div>
				<h1> Current User Profile </h1>
					<h5>Email: {this.props.user.emails[0].address}</h5>
					<h5>Name: {this.props.user.profile.name}</h5>
					<h5>Location: {this.props.user.profile.location}</h5>
					<EmailUpdate />
					<NameUpdate />
					<LocationUpdate />
					<UpdatePassword />
				</div>
		
		)
	}
}

import React, {Component} from 'react';
import NameUpdate from './updateName';
import EmailUpdate from './updateEmail';

export default class ProfileData extends Component {

  handleChange(event) {
  	event.preventDefault();
  	var location = this.refs.locat.value
  
  
    Meteor.call('updateLocation', location);
	}


	render(){
		return(
	
				<li>
					<span>Change Email</span> {this.props.user.emails[0].address}<EmailUpdate />
					<span>Change Name</span> {this.props.user.profile.name}<NameUpdate />
					<span>Location</span> 
						<select className="location" ref="locat" onChange={this.handleChange.bind(this)}>
							<option defaultValue="n/a">n/a</option>
						  <option value="Kyiv">Kyiv</option>
						  <option value="Kharkiv">Kharkiv</option>
						  <option value="Dnipro">Dnipro</option>
						  <option value="Odesa">Odesa</option>
						  <option value="Ivano-Frankivsk">Ivano-Frankivsk</option>
						  <option value="Lviv">Lviv</option>
						</select>
				</li>
		
		)
	}
}

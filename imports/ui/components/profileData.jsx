import React, {Component} from 'react';
import UpdateName from './updateName';
import UpdateEmail from './updateEmail';

export default class ProfileData extends Component {



	render(){
		return(
	
				<li>
					<span>Email</span> {this.props.user.emails[0].address}<UpdateEmail />
					<span>Name</span> {this.props.user.profile.name}<UpdateName /> 
				</li>
		
		)
	}
}

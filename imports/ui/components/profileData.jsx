import React, {Component} from 'react';

export default class ProfileData extends Component {
	

	render(){
		return(

			
				{this.props.users.email}
				{this.props.users.name}
				{this.props.users.location}
			
		)
	}
}
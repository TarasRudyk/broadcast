import React, {Component} from 'react';

import '../../api/methods'

export default class NameEmail extends Component {
  
  updateEmail(event) {
    event.preventDefault();
    var email = this.refs.email.value.trim();
    
    Meteor.call('setEmail', email); 
  }
  render() {
		return (
			<form className="email" onSubmit={this.updateEmail.bind(this)}>
				<input type="text" ref="email" />
			</form>
		)
	}
}
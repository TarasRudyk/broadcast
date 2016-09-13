import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

import '../../api/methods'

export default class UpdatePassword extends Component {
  
  updatePassword(event) {
    event.preventDefault();
    var password = this.refs.password.value.trim();
    
    Meteor.call('updatePassword', password, ()=>{
      this.refs.password.value = ''}); 
  }
  render() {
		return (

			<form className="col s6 password" onSubmit={this.updatePassword.bind(this)}>
				<label htmlFor="password">New Password</label>
				<input type="password" id="password" ref="password" minLength="6" required/>
			</form>
		)
	}
}  
import React, {Component} from 'react';

import '../../api/methods'

export default class EmailUpdate extends Component {
  
  updateEmail(event) {
    event.preventDefault();
    var email = this.refs.email.value.trim();
    
    Meteor.call('setEmail', email,()=>{
      this.refs.email.value = ''}); 
  }
  render() {
		return (

			<form className="col s3 email" onSubmit={this.updateEmail.bind(this)}>
				<label htmlFor="email">New email</label>
				<input type="text" id="email" ref="email"/>
			</form>
		)
	}
}  
import React, {Component} from 'react';

import '../../api/methods'

export default class NameUpdate extends Component {
  
  updateName(event) {
    event.preventDefault();
    var name = this.refs.name.value.trim();
    
    Meteor.call('setName', name, ()=>{
      this.refs.name.value = ''}); 
  }
  render() {
		return (
			<form className="col s3 name" onSubmit={this.updateName.bind(this)}>
				<label htmlFor="name">New name</label>
        <input id="name" type="text" ref="name"/>
			</form>
		)
	}
}
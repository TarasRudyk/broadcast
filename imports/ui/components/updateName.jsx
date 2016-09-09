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
			<form className="name" onSubmit={this.updateName.bind(this)}>
				<input type="text" ref="name" />
			</form>
		)
	}
}
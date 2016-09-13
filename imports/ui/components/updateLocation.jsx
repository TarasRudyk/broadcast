import React, {Component} from 'react';

import '../../api/methods'

export default class LocationUpdate extends Component {
  
  updateLocation(event) {
    event.preventDefault();
    var location = this.refs.locat.value.trim();
    
    Meteor.call('updateLocation', location, ()=>{
      this.refs.locat.value = ''}); 
  }
  render() {
		return (
			<form className="col s3 location" onSubmit={this.updateLocation.bind(this)}>
				<label htmlFor="location">New location</label>
        <input id="location" type="text" ref="locat" required/>
			</form>
		)
	}
}


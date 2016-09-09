import React, {Component} from 'react';

import '../../api/methods'

export default class MessageForm extends Component {
  
  addBroadcast(event) {
    event.preventDefault();
    var post = this.refs.message.value.trim();
    
    Meteor.call('addMessage', post, ()=>{
      this.refs.message.value = '';
    }); 
  }
  render() {
		return (
			<form className="broadcasts" onSubmit={this.addBroadcast.bind(this)}>
				<textarea type="text" ref="message" placeholder="Leave message here..." />
        <button type="submit">Post</button>
			</form>
		)
	}
}
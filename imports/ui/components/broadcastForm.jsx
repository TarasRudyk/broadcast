import React, {Component} from 'react';

export default class MessageForm extends Component {
  
  addBroadcast(event) {
    event.preventDefault();
    var message = this.refs.message.value.trim();
    
    Broadcast.insert({
      message: message,
      complete: false,
      createdAt: new Date(),
    });

    this.refs.message.value = '';
  }


  render() {
    

		return (
			<form className="broadcasts" onSubmit={this.addBroadcast.bind(this)}>
				<input type="text" ref="message" placeholder="Leave message here..." />
			</form>
		)
	}
}
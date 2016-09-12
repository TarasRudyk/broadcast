import React, {Component} from 'react';

import '../../api/methods'

export default class MessageForm extends Component {
  
  addBroadcast(event) {
    event.preventDefault();
    var post = this.refs.message.value.trim();
    
    Meteor.call('addMessage', post, (error, data)=>{
      if(error){
        Bert.alert('Please loggin before submitting', 'danger', 'fixed-top', 'fa-frown-o')
      }else{
        this.refs.message.value = '';
      }
    }); 
  }
  render() {
		return (
      <form className="col s6 " onSubmit={this.addBroadcast.bind(this)}>
        <div className="row">
          <div className="input-field col s9 form">
            <textarea id="message" className="materialize-textarea" maxLength="100" 
                type="text" ref="message"></textarea>
            <label htmlFor="message">Leave message here...</label>
            <button className="waves-effect waves-light btn-large col s3 broadcast-btn" type="submit" >Post</button>
          </div>
        </div>
      </form>
		)
	}
}



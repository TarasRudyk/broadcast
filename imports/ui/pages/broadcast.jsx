import React from 'react';
import {render} from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../../api/publications.js';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

import MessageForm from '../components/broadcastForm';
import BroadcastList from '../components/broadcastList';

export default class Broad extends TrackerReact(React.Component) {

  constructor(){
  	super();
  	this.state = {
  		subscription: {
  			message: Meteor.subscribe("userLocation")
  		}
  	}
  }

  componentWillUnmount() {
      this.state.subscription.message.stop();
  }

	broadcasts() {
		return Broadcast.find().fetch();
	}

	render() {


		return (
			<div>
				<h1>Broadcast</h1>
					<MessageForm/>
					<ul>
						{this.broadcasts().map((broadcast)=>{
							return <BroadcastList key={broadcast._id} broadcast={broadcast}/>
						})}
					</ul>

			</div>
		)
	}
}


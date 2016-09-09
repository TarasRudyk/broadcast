import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import './publications.js';

Meteor.methods({
	
	addMessage(post) {
		  Broadcast.insert({
      message: post,
      complete: false,
      createdAt: new Date(),
    });
	},
	deleteBroadcast(id) {
		Broadcast.remove(id);
	},


	
	updateLocation(locat) {
		Users.update(this.userId, {$set: {location: locat}});
		console.log(locat)
	}


});

		// Meteor.users.update({_id:this.userId}
		// 	, {location: locat}
		// Meteor.users.update(this.userId, {$set: {blurb: newText}});
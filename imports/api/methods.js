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
		Users.update(this.userId, {$set: {'profile.location': locat}});
		console.log(locat)
	},

	setName(name) {
		Users.update(this.userId, {$set: {'profile.name': name}});
		console.log(name)
	},

	setEmail(email) {
		Users.update(this.userId, {$set: {'emails' :[{'address':email, 'verified': false}]}});
		console.log(email)
	}

});

		
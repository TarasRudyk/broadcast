import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

import './publications.js';

Meteor.methods({
	


	addMessage(post) {
			if(!Meteor.userId()){
				throw new Meteor.Error("Sign up please!");
			}
		  Broadcast.insert({
      message: post,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId(),
      location: Meteor.user().profile.location,
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
	},


});



import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo';

Broadcast = new Mongo.Collection('broadcast');
Users = Meteor.users;

if(Meteor.isServer){
	Meteor.publish("allBroadcast", function(){
		return Broadcast.find();
	});

	Meteor.publish("userLocation", function(){
		return Broadcast.find({location: Meteor.users.findOne(this.userId).profile.location});
	});

	Meteor.publish('users',function(){
		return Users.find({_id: this.userId})
	});

};


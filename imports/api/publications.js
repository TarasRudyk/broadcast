import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo';

Broadcast = new  Mongo.Collection('broadcast');

if(Meteor.isServer){
	Meteor.publish("allBroadcast", function(){
		return Broadcast.find();
	});


};
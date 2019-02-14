import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../lib/collections.js';
import './main.html';

 Template.Profile.helpers({
 	proffName(){
 		return userDB.findOne({}).firstName;
 	}
 });

Template.addprofile.events({
	'click .js-savebtn'(event, instance){
		var fName = $("#exampleModal input[name='firstName']").val();
		var lName = $("#exampleModal input[name='lastName']").val();
		var pName = $("#exampleModal input[name='projectName']").val();
		console.log( "The first name is",fName);
		console.log( "The first name is",lName);
		console.log( "The first name is",pName);
		 $("#exampleModal input[name='firstName']").val("");
		 $("#exampleModal input[name='lastName']").val("");
		 $("#exampleModal input[name='projectName']").val("");
		$("#exampleModal").modal("hide");
		userDB.insert({'firstName':fName, 'lastName': lName, 'projectName':pName});
 
	}   
	   
});
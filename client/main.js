import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../lib/collections.js';
import './main.html';

Template.Profile.helpers({
	profAll(){
		return userDB.find({});
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

Template.Profile.events({
	'click .js-info'(event,instance){
		var uId = this._id;		
		$('#viewUser input').val(uId);
		$('#viewUser img').attr("src", userDB.findOne({_id: uId}).projectName);
		$('#editModal').modal('show');


	},
	'click .js-like'(event, instance){
		console.log("You clicked like");
		var profId = this._id;
		var numLikes = userDB.findOne({_id: profId}).like;
		if(!numLikes){
			numLikes = 0;
		}
		numLikes = numLikes + 1;
		console.log("You Have",numLikes);

		userDB.update({_id:profId}, {$set:{'like':numLikes}});
	},
	'click .js-dislike'(event,instance){
		 console.log("You clicked like");
		var profId = this._id;
		var numdislikes = userDB.findOne({_id: profId}).dislikes;
		if(!numdislikes){
			numdislikes = 0;
		}
		numdislikes = numdislikes + 1;
		console.log("You Have",numdislikes);
		userDB.update({_id:profId}, {$set:{'dislikes':numdislikes}});
	},
	'click .js-delete'(event,instance){
		var profId = this._id;
		$('#'+ profId).fadeOut('slow',function(){
			userDB.remove({_id: profId});
		});			
	}
}); 
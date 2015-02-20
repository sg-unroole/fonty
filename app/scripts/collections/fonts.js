define([
	'backbone',
	'models/font'
],
function( Backbone, Font ) {
    'use strict';


	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {},

		model: Font,

		randomize: function(){
			var arr = this.pluck("id");
   			var model = this.get(arr[Math.floor(Math.random() * arr.length)]);
   			return model;
		}
	});


});

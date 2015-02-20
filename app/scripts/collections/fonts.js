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

		randomize: function(filters) {
			var filtered_collection = this.filterData(filters);
   			return filtered_collection[Math.floor(Math.random() * filtered_collection.length)];

		},

		filterData: function(options) {
			var filtered = this.models.filter(function(font) {
   				 return _.contains(options, font.get("category"));
			});

			return filtered;
		}

	});


});

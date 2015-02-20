define([
	'backbone',
	'models/font'
],
function( Backbone, Font ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {},

		model: Font
		
	});
});

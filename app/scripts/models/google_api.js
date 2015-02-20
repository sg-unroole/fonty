define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			this.urlRoot = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCgz3pJt9l0R4fn9FSLDahVaN3cGztthhY';
		},

		defaults: {},

    });
});

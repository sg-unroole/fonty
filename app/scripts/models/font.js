define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function(fitem) {
			this.category = fitem.category;
			this.files = fitem.files;
			this.kind = fitem.kind;
			this.subsets = fitem.subsets;
			this.lastModified = fitem.lastModified;
			this.version = fitem.version;
			this.family = fitem.family;
			this.variants = fitem.variants;
		},

		defaults: {},

    });
});

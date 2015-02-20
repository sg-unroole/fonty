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

		// options would be the weight, italic
		setFont: function(jObject, options) {
			//gets the font
			var font_name = this.family;

			WebFont.load({
				google: {
					families: [font_name]
				}
			});
			
			jObject.css('font-family', font_name);
		}
    });
});

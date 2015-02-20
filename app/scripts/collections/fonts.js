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

		// options would be the weight, italic
		setFont: function(jObject, options) {
			//gets the font
			var font_name = this.get("family");
			WebFont.load({
				google: {
					families: [font_name]
				}
			});
			jObject.css('font-family', font_name);
		}
	});


});

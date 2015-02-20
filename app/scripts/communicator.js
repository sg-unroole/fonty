define([
	'backbone',
	'backbone.marionette',
	'models/google_api',
	'collections/fonts',
	'models/font'
],
function( Backbone, Marionette, GoogleAPI, Fonts, Font ) {
    'use strict';

	var Communicator = Backbone.Marionette.Controller.extend({
		initialize: function( options ) {
			// create a pub sub
			this.mediator = new Backbone.Wreqr.EventAggregator();

			//create a req/res
			this.reqres = new Backbone.Wreqr.RequestResponse();

			// create commands
			this.command = new Backbone.Wreqr.Commands();

			this.getFonts();
		},

		getFonts: function() {
			var google_api = new GoogleAPI(),
				fonts = new Fonts();

			google_api.fetch({
				success: function(model) {
					var all_fonts = model.get("items")
					for(var item in all_fonts ) {
						var fitem = all_fonts[item], 
							font = new Font(fitem);
						
						fonts.add(font);
					}
				}
			});
			console.log(fonts);
		}
	});

	return new Communicator();
});

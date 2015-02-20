define([
	'application',
	'backbone',
	'backbone.marionette',
	'models/google_api',
	'collections/fonts',
	'models/font',

	'views/layout/index',
	'views/item/locked',
	'views/item/p_filters',
	'views/item/title_filters',
	'views/item/unlocked'
],
function(App, Backbone, Marionette, GoogleAPI, Fonts, Font, 
	MainLayout, LockedView, PFiltersView, TitleFiltersView, UnlockedView ) {
    'use strict';

	var Communicator = Backbone.Marionette.Controller.extend({
		initialize: function( options ) {
			this.mediator = new Backbone.Wreqr.EventAggregator();
			this.reqres = new Backbone.Wreqr.RequestResponse();
			this.command = new Backbone.Wreqr.Commands();

			var mainLayout = new MainLayout();
			$("body").append(mainLayout.render().el);

			var fonts = this.getFonts();

			mainLayout.titleFiltersRegion.show(new TitleFiltersView({}));
			mainLayout.pFiltersRegion.show(new PFiltersView({}));
			mainLayout.lockedRegion.show(new LockedView({collection:fonts}));
			mainLayout.unlockedRegion.show(new UnlockedView({collection:fonts}));
		},

		getFonts: function() {
			var google_api = new GoogleAPI(),
				fonts = new Fonts();

			google_api.fetch({
				async:false,
				success: function(model) {
					var all_fonts = model.get("items")
					for(var item in all_fonts ) {
						var fitem = all_fonts[item], 
							font = new Font(fitem);
						
						fonts.add(font);
					}
				}
			});
			return fonts;
		}
	});

	return new Communicator();
});

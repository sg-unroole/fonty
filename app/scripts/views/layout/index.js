define([
	'backbone',
	'hbs!tmpl/index'
],
function( Backbone, IndexTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Index Layout");
		},
		
    	template: IndexTmpl,
    	

    	/* Layout sub regions */
    	regions: {
    		titleFiltersRegion: "#titleFiltersRegion",
    		pFiltersRegion: "#pFiltersRegion",
    		unlockedRegion: "#unlockedRegion",
    		lockedRegion: "#lockedRegion"
    	},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});

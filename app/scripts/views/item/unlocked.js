define([
	'backbone',
	'hbs!tmpl/unlocked'
],
function( Backbone, UnlockedTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Unlocked ItemView");
		},
		
    	template: UnlockedTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});

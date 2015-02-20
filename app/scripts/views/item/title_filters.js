define([
	'backbone',
	'hbs!tmpl/title_filters'
],
function( Backbone, TitleFiltersTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a TitleFilters ItemView");
		},
		
    	template: TitleFiltersTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},
		
		getFilter: function(){

		},
		/* on render callback */
		onRender: function() {}
	});

});

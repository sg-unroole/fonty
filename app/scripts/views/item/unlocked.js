define([
	'backbone',
	'hbs!tmpl/unlocked'
],
function( Backbone, UnlockedTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function(options) {
			this.model = options.model;
			this.pmodel = options.pmodel;
		},
		
    	template: UnlockedTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
			this.model.setFont(this.$el.find("h1"));
			this.pmodel.setFont(this.$el.find("p"));
		}
	});

});

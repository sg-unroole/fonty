define([
	'backbone',
	'hbs!tmpl/unlocked'
],
function( Backbone, UnlockedTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function(options) {
			this.collection = options.collection;
			this.model = this.collection.randomize([]);
			this.pmodel = this.collection.randomize([]);
		},
		
    	template: UnlockedTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
			this.model.setFont(this.$el.find("input"));
			this.pmodel.setFont(this.$el.find("textarea"));
		}
	});

});

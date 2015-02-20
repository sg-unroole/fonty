define([
	'backbone',
	'hbs!tmpl/locked'
],
function( Backbone, UnlockedTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function(options) {
			this.p_filter_v = options.p_filter_v;
			this.t_filter_v = options.t_filter_v;
			this.collection = options.collection;
			this.randomizeFonts();
		},
		
    	template: UnlockedTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		randomizeFonts: function() {
			this.model = this.collection.randomize(this.t_filter_v.getFilter);
			this.pmodel = this.collection.randomize(this.p_filter_v.getFilter);
		},
		/* on render callback */
		onRender: function() {
			this.model.setFont(this.$el.find("h1"));
			this.pmodel.setFont(this.$el.find("p"));
		}
	});


});


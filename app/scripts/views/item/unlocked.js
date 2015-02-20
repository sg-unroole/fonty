define([
	'backbone',
	'hbs!tmpl/unlocked'
],
function( Backbone, UnlockedTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function(options) {
			this.p_filter_v = options.p_filter_v;
			this.t_filter_v = options.t_filter_v;
			this.collection = options.collection;
			

		},
		
    	template: UnlockedTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
			"click #randomize" : "randomizeEvent"
		},

		randomizeEvent: function(e){
			e.preventDefault();
			e.stopPropagation();
			this.randomizeFonts();
		},

		randomizeFonts: function() {
			this.model = this.collection.randomize(this.t_filter_v.getFilter());
			this.pmodel = this.collection.randomize(this.p_filter_v.getFilter());
			this.model.setFont(this.$el.find("input"));
			this.pmodel.setFont(this.$el.find("textarea"));
		},

		/* on render callback */
		onRender: function() {
			this.randomizeFonts();
		}
	});

});

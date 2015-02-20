define([
	'backbone',
	'hbs!tmpl/p_filters'
],
function( Backbone, PFiltersTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a PFilters ItemView");
		},
		
    	template: PFiltersTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},
		
		getFilter: function(){
			var checked = [];
			$.each(this.$el.find(".checks-wrapper input:checked"), function(index, input){
				checked.push($(input).data('filter'));
			});
			return checked;
		},
		/* on render callback */
		onRender: function() {}
	});

});

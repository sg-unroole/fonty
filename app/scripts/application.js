define([
	'backbone',
	'communicator'
],

function( Backbone, Communicator ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {
		var trayVisible = false;
		$('.toggle-options').click(function(){
			if(trayVisible === false) {
				$('.options-tray').slideDown();
				$(this).find('.fa').removeClass('fa-cogs').addClass('fa-arrow-up');
				trayVisible = true;
			} else {
				$('.options-tray').slideUp();
				$(this).find('.fa').removeClass('fa-arrow-up').addClass('fa-cogs');
				trayVisible = false;
			}
		});

		$('.locked-inner-box i').click(function(){
			$(this).toggleClass('active');
		});
		
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});

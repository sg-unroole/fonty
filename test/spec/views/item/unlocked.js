(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/unlocked'
		],
		function( Unlocked ) {

			describe('Unlocked Itemview', function () {

				it('should be an instance of Unlocked Itemview', function () {
					var unlocked = new Unlocked();
					expect( unlocked ).to.be.an.instanceof( Unlocked );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
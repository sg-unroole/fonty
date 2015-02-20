(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/locked'
		],
		function( Locked ) {

			describe('Locked Itemview', function () {

				it('should be an instance of Locked Itemview', function () {
					var locked = new Locked();
					expect( locked ).to.be.an.instanceof( Locked );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
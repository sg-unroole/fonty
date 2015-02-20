(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/fonts'
		],
		function( Fonts ) {

			describe('Fonts Collection', function () {

				it('should be an instance of Fonts Collection', function () {
					var fonts = new Fonts();
					expect( fonts ).to.be.an.instanceof( Fonts );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
(function() {
	'use strict';

	var root = this;

	root.define([
		'models/font'
		],
		function( Font ) {

			describe('Font Model', function () {

				it('should be an instance of Font Model', function () {
					var font = new Font();
					expect( font ).to.be.an.instanceof( Font );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
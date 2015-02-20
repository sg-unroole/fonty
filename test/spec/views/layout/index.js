(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/index'
		],
		function( Index ) {

			describe('Index Layout', function () {

				it('should be an instance of Index Layout', function () {
					var index = new Index();
					expect( index ).to.be.an.instanceof( Index );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
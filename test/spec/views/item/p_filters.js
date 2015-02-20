(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/p_filters'
		],
		function( PFilters ) {

			describe('PFilters Itemview', function () {

				it('should be an instance of PFilters Itemview', function () {
					var p_filters = new PFilters();
					expect( p_filters ).to.be.an.instanceof( PFilters );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
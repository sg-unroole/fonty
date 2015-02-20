(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/title_filters'
		],
		function( TitleFilters ) {

			describe('TitleFilters Itemview', function () {

				it('should be an instance of TitleFilters Itemview', function () {
					var title_filters = new TitleFilters();
					expect( title_filters ).to.be.an.instanceof( TitleFilters );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
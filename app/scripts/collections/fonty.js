/*global define*/

define([
    'underscore',
    'backbone',
    'models/fonty'
], function (_, Backbone, FontyModel) {
    'use strict';

    var FontyCollection = Backbone.Collection.extend({
        model: FontyModel
    });

    return FontyCollection;
});

define([
	'backbone',
	'app/models/place',
	'backbone.localStorage'
], function(Backbone, PlaceModel){
	'use strict';

	var  PlacesCollection = Backbone.Collection.extend({

		localStorage: new Backbone.LocalStorage("Places"),

		defaults:{
			'countryCode': '',
			'name': ''
		}
	});

	return PlacesCollection;

});
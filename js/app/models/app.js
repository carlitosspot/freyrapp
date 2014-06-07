define([
	'backbone',
	'backbone.localStorage'
], function(Backbone){
	'use strict';

	var AppModel = Backbone.Model.extend({

		localStorage: new Backbone.LocalStorage("AppSettings"),

		defaults:{
			'backgroundColor': '#999999',
			'celcius': true,
			'welcomeMessage': 'Welcome to Weather'
		}
	});

	return AppModel;

});
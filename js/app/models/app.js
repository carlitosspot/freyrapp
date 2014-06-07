define([
	'backbone'
], function(Backbone){
	'use strict';

	var AppModel = Backbone.Model.extend({
		defaults:{
			'backgroundColor': '#999999',
			'celcius': true,
			'welcomeMessage': 'Welcome to Weather'
		}
	});

	return AppModel;

});
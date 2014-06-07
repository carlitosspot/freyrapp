define([
	'backbone',
	'app/models/day'
], function(Backbone, DayModel){
	'use strict';

	var DaysCollection = Backbone.Collection.extend({
		model: DayModel,
		// url: 'http://api.wunderground.com/api/ba840745ab58006a/forecast/q/IT/Magenta.json',
		
		sync:function(method, model, options){
			options.timeout = 8000;
			options.dataType = "jsonp";
			return Backbone.sync(method, model, options);
		},

		parse:function(response){
			return response.forecast.simpleforecast.forecastday;
		}
	});

	return DaysCollection;

});
define([
	'jquery',
	'underscore',
	'backbone',
	'app/templates',
	'app/collections/days',
], function($, _, Backbone, Templates, DaysCollection){
	'use strict';

	var PlaceView = Backbone.View.extend({
			
		template: Templates['place'],

		collection: new DaysCollection([]),


		initialize: function(){
			var html = this.template(this.model.toJSON());
				this.$el.html(html);
				this.$bodyEl = this.$('.panel-body');
		},
		

		render: function(){
			var that = this;

			this.collection.url = [
				'http://api.wunderground.com/api/',
				'ba840745ab58006a',
				'/forecast/q/',
				this.model.get('countryCode'),
				'/',
				this.model.get('name'),
				'.json',
			].join('');

			this.collection.fetch({
				success: function(collection, response, options){
					that.renderDays();
				},
				error: function(collection, response, options){
					console.log('There was an error');
				}
			})
			
			return this;
		},


		renderDays: function(){
			var daysHtml = [];
			this.collection.each( function(element, index, list) {
				daysHtml.push(
						Templates['day'](element.toJSON())
					);
			});

			this.$bodyEl.html(daysHtml.join(''));
		}

	});

	return PlaceView;
	


});
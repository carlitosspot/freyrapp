define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	'use strict';
	var currentView; 
	var Router = Backbone.Router.extend({
		
		routes: {
			'':'goToDash',
			'dash': 'goToDash',
			'about': 'goToAbout'
		},

		initialize: function(view){
			//console.log(this.appView);
			this.currentView = view;
			
		},

		goToDash: function(){
			this.currentView.setPage('dash');
		},

		goToAbout: function(){
			this.currentView.setPage('about');
		},

	});

	return Router;

});
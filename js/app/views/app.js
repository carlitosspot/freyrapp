define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/dash',
	'app/views/about'
], function($, _, Backbone, DashView, AboutView){
	'use strict';

	var AppView = Backbone.View.extend({
		
		id: 'app-view',

		html: [
			'<div class="navbar navbar-default">',
				'<a class="navbar-brand" href="#"> Weather Alert </a> ',
				'<ul class="nav navbar-nav">',
					'<li id="nav-dash"><a href="#dash">Dashboard</a></li> ',
					'<li id="nav-about"><a href="#about">About</a></li> ',
				'</ul>',
			'</div>',
			'<div id="content"></div>',
		].join(''),


		events: {},

		views: {},



		initialize: function(){

			this.views['about'] = new AboutView({
				id: 'page-about',
				className: 'page-view'
			});

			this.views['dash'] = new DashView({
				id: 'page-dash',
				className: 'page-view'
			});


			this.$el.append(this.html);

			this.$('#content').append(this.views['about'].render().el);
			this.$('#content').append(this.views['dash'].render().el);

		},


		setPage: function(page){
			this.$('.nav li').removeClass('active');
			this.$('.page-view').hide();
			this.$('#page-'+page).show();
			this.$('#nav-'+page).addClass('active');

			// this.model.set('welcomeMessage', 'Welcome to the '+page+ ' page');
		}

	});

	return AppView;

});
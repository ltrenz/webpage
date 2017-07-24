	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'home/home.html',
				controller  : 'homeController'
			})

			// route for the resume page
			.when('/resume', {
				templateUrl : 'resume/resume.html',
				controller  : 'resumeController'
			})
      
        
        // route for the income page
			.when('/income', {
				templateUrl : 'income/income.html',
				controller  : 'incomeController'
			})
        

			// route for the contact page
			.when('/contact', {
				templateUrl : 'contact/contact.html',
				controller  : 'contactController'
			})
        
        	// route for the todo page
			.when('/todo', {
				templateUrl : 'todo/todo.html',
				controller  : 'TodoCtrl'
			})
        
        
        	// route for the friends page
			.when('/friends', {
				templateUrl : 'friends/friends.html',
				controller  : 'friendsController'
			})
        
        
            .when('/comments/:friendID', {
                templateUrl: 'friends/comments.html',
                controller : 'friendsController'
        });
	});

	


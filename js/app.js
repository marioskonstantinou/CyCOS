var myApp = angular.module('myApp', [
	'ngRoute',
	'appControllers',
	'ngMaterial',
	'ngMessages',
	'material.svgAssetsCache',
	'ui.router',
	'ui.bootstrap',
	'dialogs'
]);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when('/tabs', '/tabs/general');
    $urlRouterProvider.otherwise('/tabs');
    $stateProvider.state('tabs', {
      	url: '/tabs',
        controller: 'GeneralController'
    });
    $stateProvider.state('tabs.general', {
        url: '/general',
        data: {
	      'selectedTab': 0
	    },
	    views: {
		    '@': {
	        templateUrl: '/partials/general.html',
	        controller: 'GeneralController'
	        }
        }
    });
    $stateProvider.state('tabs.financial', {
        url: '/financial',
        data: {
	      'selectedTab': 1
	    },
	    views: {
		    '@': {
	        templateUrl: '/partials/financial.html',
	        controller: 'FinancialController'
	        }
        }
    });
      $stateProvider.state('tabs.corporate', {
        url: '/corporate',
        data: {
	      'selectedTab': 2
	    },
	    views: {
		    '@': {
	        templateUrl: '/partials/corporate.html',
	        controller: 'CorporateController'
	        }
        }
    });
     $stateProvider.state('tabs.group', {
        url: '/group',
        data: {
	      'selectedTab': 3
	    },
	    views: {
		    '@': {
	        templateUrl: '/partials/group.html',
	        controller: 'GroupController'
	        }
        }
    });
     $stateProvider.state('tabs.people', {
        url: '/people',
        data: {
	      'selectedTab': 4
	    },
	    views: {
		    '@': {
	        templateUrl: '/partials/people.html',
	        controller: 'PeopleController'
	        }
        }
    });
 }]);
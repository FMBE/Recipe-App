'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

var recipes = [{
      name: 'Spaghetti Bolognese',
      description: "A sweet dish with little spices",
      createdby: "Fausto Murillo",
      ingredients: [
        "spaghetti",
        "garlic",
        "meatballs",
        "tomato",
        "spices",
        "salt"
      ],
      reviews: [{
        stars: 5,
        body: "I love this dish!",
        author: "joe@example.org"
      }, {
        stars: 1,
        body: "This dish sucks.",
        author: "tim@example.org"
      }]
    }, {
      name: 'Spaghetti Fetuccini',
      description: "A sweet dish with creamy taste",
      createdby: "Fausto Murillo",
      ingredients: [
        "spaghetti",
        "ham",
        "shrimp",
        "fetuccini",
        "spices",
        "cream"
      ],
      reviews: [{
        stars: 5,
        body: "I love this dish!",
        author: "joe@example.org"
      }, {
        stars: 1,
        body: "This dish sucks.",
        author: "tim@example.org"
      }]
    }
    }];

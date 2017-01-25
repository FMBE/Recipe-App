'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.view6',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
/*

app.controller("GlobalController", function() {
  this.products = recipes;
  this.users = users;
});

app.controller("RegisterController", function(){

  this.user = {};

  this.addUser = function(product){
    product.users.push(this.user);
    this.user = {};
  };
});

var users = [{
    name: 'Fausto Murillo',
    email: "fausto.murillo@hotmail.com",
    password: 'abc123'
  }, {
    name: 'Leonardo Castillo',
    email: "leonardo.castillo@hotmail.com",
    password: '123abc'
  }];
();

*/

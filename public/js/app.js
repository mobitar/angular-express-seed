'use strict';

var app = angular.module('app', [
  'ngRoute',
  'ngResource',
  'ngCookies'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
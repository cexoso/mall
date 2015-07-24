'use strict';

angular
  .module('paticaApp', [
    'ui.router',
    'ngResource',
    'ngAnimate',
    'controller',
    'service'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/mall1');
     $stateProvider.state('index', {
        url:'/index',
        templateUrl: 'views/index.html',
        abstract:true,
        controller:'indexController'
      }).
     state('index.mall1',{
        url:'^/mall1',
        templateUrl: 'views/mall1.html'
     }).
     state('index.mall2',{
        url:'^/mall2',
        templateUrl: 'views/mall2.html',
        controller:'mall2controller'
     }).
     state('index.mall3',{
        url:'^/mall3',
        templateUrl: 'views/mall3.html'
     }).
     state('index.mall4',{
        url:'^/mall4',
        templateUrl: 'views/mall4.html'
     })
  
 
    
  });
angular.module('controller',[]);
angular.module('service',[]);

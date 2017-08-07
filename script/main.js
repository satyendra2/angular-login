
    var app = angular.module('myApp', ['ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: './app/partialls/login/login.html'
            })
            .state('home', {
                url: '/home',
                controller: 'HomeController',
                templateUrl: './app/partialls/home/home.html'
            })
            .state('home.component', {
                url: '/component',
                controller: 'ItemController',
                templateUrl: './app/partialls/component/table.html'
            });
    });
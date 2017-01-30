// app.js
angular.module('app', ['ui.router'])
       .config(     ['$stateProvider','$urlRouterProvider',
        function ($stateProvider,$urlRouterProvider) {
    /* configure states here */
    $stateProvider
    .state("project",{
        url:'/project',
        templateUrl:"project.html",
    });
    $stateProvider
    .state("dashboard",{
        url:'/dashboard',
        templateUrl:"dashboard.html",
    });
    $stateProvider
    .state("features",{
        url:'/features',
        templateUrl:"features.html",
    });
    $stateProvider
    .state("about",{
        url:'/about',
        templateUrl:"about.html",
    });
    $stateProvider
    .state("help",{
        url:'/help',
        templateUrl:"help.html",
    });
    $stateProvider
    .state("project2",{
    	url:'/project2',
    	templateUrl:"project2.html",
    	controller:'projectCtrl',
    });
     $urlRouterProvider.otherwise('/');
 }]);
      .controller('projectCtrl',['$scope',function($scope,$location)
       {
       	$scope.clicked=function(){
       		$location.path('project2.html');
       	}
       }])
      
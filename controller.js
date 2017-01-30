angular.module('app',['ui.router'])

app.controller('projectCtrl',['$scope',function($scope,$location)
       {
       	$scope.clicked=function(){
       		$location.path('project2.html');
       	}
       }]);
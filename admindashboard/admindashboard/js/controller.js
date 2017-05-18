var dashboard=angular.module('dashboard', ['ngRoute']);
dashboard.config(function($routeProvider) {
	$routeProvider

	.when("/dashboard",{
		templateUrl:"dashboard.html"
	})
	 .when("/course",{
		templateUrl:"course.html"
	})
	 .when("/addcourse",{
		templateUrl:"addcourse.html"
	})
	  .when("/addmodule",{
		templateUrl:"addmodule.html"
	})
	  .when("/addsubcourse",{
		templateUrl:"addsubcourse.html"
	})
	  .when("/addexam",{
		templateUrl:"addexam.html"
	})
	 
});

  dashboard.controller('mycntrlr',function($scope){
    $scope.mydata=[];
    $scope.addoption=function(){
      $scope.mydata.push($scope.inputdata);
      
    }
    $scope.removedata=function(data){
      $scope.mydata.splice($scope.mydata.indexOf(data),1);
    }
  })

angular
.module("myApp")
.controller('wallCtrl',function($scope,wallService, $stateParams){
  $scope.test = "angular is connected";

  //get me data per product ID

  $scope.userId = function(){

    console.log($stateParams.id);

    wallService.getUserInfo($stateParams.id)
    .then(function(response){
      $scope.user = response;
      console.log( response);
    })// .then promise

  }//productsData function
  $scope.userId();


});//

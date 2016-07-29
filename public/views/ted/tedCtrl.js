angular
.module("myApp")
.controller("tedCtrl",function($scope,$sce,tedServices){
  $scope.getDataFromService = function(){
      tedServices.getDataFromServer().then(function(dataFromReponse){
        console.log(dataFromReponse);
      $scope.displayView = dataFromReponse.map(function(item){
        return $sce.trustAsResourceUrl(item);
      })
      console.log($scope.displayView);
    });
  };
  $scope.getDataFromService();

  // $interval(function(){ $scope.getDataFromService(); }, 1 * 1000); // 1 minute



});//puppiesCtrl END

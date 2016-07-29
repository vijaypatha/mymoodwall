angular
.module("myApp")
.controller("natureCtrl",function($scope,$sce,natureServices){
  $scope.getDataFromService = function(){
      natureServices.getDataFromServer().then(function(dataFromReponse){
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

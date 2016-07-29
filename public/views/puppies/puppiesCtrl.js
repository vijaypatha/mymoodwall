angular
.module("myApp")
.controller("puppiesCtrl",function($scope,$sce,puppiesServices,$timeout){
  $scope.displayView = [];
  $timeout(function(){
    $scope.getDataFromService = function(){
        puppiesServices.getDataFromServer().then(function(dataFromReponse){
          console.log(dataFromReponse);
        $scope.displayView = dataFromReponse.map(function(item){
          return $sce.trustAsResourceUrl(item);
        })
        console.log($scope.displayView);
      });
    };
    $scope.getDataFromService();
  },1000);//timeout

  // $interval(function(){ $scope.getDataFromService(); }, 1 * 1000); // 1 minute
  

});//puppiesCtrl END

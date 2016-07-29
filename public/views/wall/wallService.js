angular
.module("myApp")
.service('wallService',function($http){

  this.getUserInfo = function(id){
  return $http.get('/userInfo/'+id)
  .then(function(response){
    console.log(response);
    return response.data;
  });

}

});

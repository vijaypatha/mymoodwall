angular
.module('myApp')
.service('moviesServices',function($http){

 this.getDataFromServer = function(search){
  search = " 2017  + trailers";
  var baseUrl = 'https://www.googleapis.com/youtube/v3';
   return $http.get(baseUrl+'/search?part=snippet&key=AIzaSyAqZmMtSJor3zfR5fsXEylA0TEZt_0KmTw&maxResults=7&q='+search)
   .then(function(response){
      console.log(response);
      return response.data.items.map(function(item){
        return "http://www.youtube.com/embed/"+item.id.videoId;
      });

    });

 };

});//service

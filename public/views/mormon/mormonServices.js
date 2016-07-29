angular
.module('myApp')
.service('mormonServices',function($http){

 this.getDataFromServer = function(search){
  search = " i'm a mormon + living + prophet + mormon channel";
  var baseUrl = 'https://www.googleapis.com/youtube/v3';
   return $http.get(baseUrl+'/search?part=snippet&key=apiKey&maxResults=7&q='+search)
   .then(function(response){
      console.log(response);
      return response.data.items.map(function(item){
        return "http://www.youtube.com/embed/"+item.id.videoId;
      });

    });

 };

});//service

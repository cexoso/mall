angular.module('controller').
controller('mall2controller',['$scope','$timeout',function(s,timeout){
    s.show=true
    timeout(function(){
        s.show=false;
    },2500);
}]);
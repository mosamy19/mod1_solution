(function () {
'use strict';
    
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
    
LunchCheckController.$inject = ['$scope'];
    
function LunchCheckController($scope) {
    
    $scope.message = "";
    
    $scope.menu = "";
    
  $scope.calculateItems = function () {
      
    
      
      var menuVal = $scope.menu;
      
      var menuLength = calculateMenuLength(menuVal);

      
    if (menuVal == "") {
        
      $scope.message = "Please enter data first";
        
    } else if (menuLength <= 3) {
          
        $scope.message = "Enjoy!";
          
      } else if (menuLength > 3) {
          
        $scope.message = "Too much!";
          
      }
    

  };
}

function calculateMenuLength(menuVal) {
    
  var array = menuVal.split(",");
        
  return array.length;
    
}

})();
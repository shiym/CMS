﻿var AboutController;

AboutController = [
  "$scope", "$http", function($scope, $http) {
    $scope.$parent.title = '关于';
    $scope.$parent.showBanner = false;
    return $http.get("/data/technology.js").success(function(data) {
      return $scope.list = data;
    });
  }
];
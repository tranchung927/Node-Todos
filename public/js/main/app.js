var app = angular.module("app.todos", [])

app.controller("todoController", ['$scope', function ($scope) {
    $scope.appName = "Todo Dashboard "
}])
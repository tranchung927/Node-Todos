var app = angular.module("app.todos", ["xeditable"])

app.controller("todoController", ['$scope', 'svTodos', function ($scope, svTodos) {
    $scope.appName = "Todo Dashboard "
    $scope.fromData = {}
    $scope.todos = []

    svTodos.get().then(function (data) {
        $scope.todos = data.todos
        console.log(data)
    })

    $scope.createTodo = function () {
        var todo = {
            text: $scope.fromData.text,
            isDone: false
        }

        $scope.todos.push(todo)
        $scope.fromData.text = ""
    }

    $scope.updateTodo = function (todo) {
        console.log("Update todo: ", todo)
    }

    $scope.deleteTodo = function (todo) {
        console.log("Delete todo: ", todo)
    }
}])
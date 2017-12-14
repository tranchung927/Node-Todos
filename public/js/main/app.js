var app = angular.module("app.todos", [])

app.controller("todoController", ['$scope', function ($scope) {
    $scope.appName = "Todo Dashboard "
    $scope.todos = [
        {
            text: "Khởi tạo dự án, include thư viện bootstrap, fontawesome, angularjs, ...",
            isDone: true
        }, {
            text: "Cài đặt Angulerjs app, controller, khởi tạo dữ liệu ban đầu",
            isDone: true
        }, {
            text: "Tạo services gọi api, binding dữ liệu, action, ...",
            isDone: false
        }, {
            text: "Hoàn thành ứng dụng, deploy lên heroku ...",
            isDone: false
        }
    ]

    $scope.createTodo = function () {
        var todo = {
            text: $scope.fromData.text,
            isDone: false
        }

        $scope.todos.push(todo)
        $scope.fromData.text = ""
    }
}])
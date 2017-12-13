var Todos = require("../models/TodoModel")

module.exports = function (app) {
    app.get("/api/setupTodos", function (req, res) {
        // setup seed data
        var seedTodos = [
            {
                text: "Học Node.js",
                isDone: false    
            },
            {
                text: "Học Angular.js",
                isDone: false
            },
            {
                text: "Viết ứng dụng hoàn chỉnh", 
                isDone: false
            }
        ]

        Todos.create(seedTodos, function (err, results) {
            res.send(results)
        })
    })
}
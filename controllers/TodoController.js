var Todos = require("../models/TodoModel")

function getTodos(res) {
    Todos.find(function (err, todos) {
        if (err) {
            res.status(500).json(err)// lỗi 500 là lỗi server
        } else {
             res.json(todos)
        }
    })// không thêm 1 tham số nào thì mặc định load toàn bộ dữ liệu trong csdl
}

module.exports = function (app) {
    // get all todos
    app.get("/api/todos", function (req, res) {
        getTodos(res)
    })

    app.get("/api/todo/:id", function (req, res) {
        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) {
                throw err
            } else {
                res.json(todo)
            }
        })
    })

    // create todo
    app.post("/api/todo", function (req, res) {
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        }

        Todos.create(todo, function (err, todo) {
            if (err) {
                throw err
            } else {
                getTodos(res)
            }
        })
    })
    // update todo
    app.put("/api/todo", function (req, res) {
        if (!req.body.id) {
            return res.status(500).send("ID is required")
        } else {
            Todos.update({
                _id: req.body.id
            }, {
                text: req.body.text,
                isDone: req.body.isDone
            }, function (err, todo) {
                if (err) {
                    return res.status(500).send(err)
                } else {
                    getTodos(res)
                }
            })
        }
    })
    // Delete todo
    app.delete("/api/todo/:id", function (req, res) {
        Todos.remove({
            _id: req.params.id
        }, function (err, todo) {
            if (err) {
                return res.status(500).send(err)
            } else {
                getTodos(res)
            }
        })
    })
}
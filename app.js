// npm i express body-parser ejs morgan --save
var express = require("express")
var bodyParser = require("body-parser") // đọc thông tin người dùng post lên server
var morgan = require("morgan") // log các reqest đến
var mongoose = require("mongoose")

var config = require("./config")
var setupController = require("./controllers/SetupController")

var app = express()
var port = process.env.PORT || 3000

app.use("/assets", express.static(__dirname + "/public"))
app.use(bodyParser.json()) // đọc dữ liêu gửi lên là json
app.use(bodyParser.urlencoded({ extended: true })) //nhận kiểu dữ liệu tùy ý post về server

app.use(morgan("dev")) // log mọi request ra console

app.set("view engine", "ejs")

// db info
// console.log(config.getDbConnectionString())

mongoose.connect(config.getDbConnectionString(), { useMongoClient: true })
setupController(app)

app.get("/", function (req, res) {
    res.render("index")
})

app.listen(port, function () {
    console.log("App listening on port: " + port)
})
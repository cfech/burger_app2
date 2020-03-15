var express = require("express");

var exphbs = require("express-handlebars");
require("dotenv").config()
// Create express app instance.
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var controller = require("./controllers/burger_controllers")

var PORT = process.env.PORT || 3000;

var routes = require("./controllers/burger_controllers")
app.use(routes)

//launch express connection
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
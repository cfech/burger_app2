//Require express
var express = require("express");
var exphbs = require("express-handlebars");
require("dotenv").config()

// Create express app instance.
var app = express();

//express routes 
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting the app engine to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Dynamic port
var PORT = process.env.PORT || 3000;

//requireing the burger controller file 
var routes = require("./controllers/burger_controllers")
app.use(routes)

//launch express connection
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
//Require statements
var express = require("express")
var router = express.Router()
var burger = require("../models/burgerModel")

//get route for getting all burgers 
router.get("/", function (req, res) {
    burger.getAll(function (data) {
        var burgerObj = {
            burger: data
        };
        res.render("index", burgerObj)
    });
});

//Post route for creating a new burger 
router.post("/api/burgers", function (req, res) {
    burger.createBurger([req.body.burgerName, false], function (result) {
        res.end()
    })
})

//Put route for updating burger status
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.updateBurger({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Exporting router 
module.exports = router 
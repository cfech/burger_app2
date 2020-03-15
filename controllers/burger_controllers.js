var express = require("express")

var router = express.Router()
var burger = require("../models/burgerModel")




router.get("/", function (req, res) {

    console.log("trying to get buger")
    burger.getAll(function (data) {
        var burgerObj = {
            burger: data
        }; console.log("burger object ", burgerObj)
        res.render("index", burgerObj)
    });
    // res.send("hello world")
});

router.post("/api/burgers", function (req, res) {
    // console.log("test: ",burgerName)

// need to replace new burger with variable
    burger.createBurger(["new burger", false], function (result) {
        res.json(id.result.burgerId)
    })
})



router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

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


module.exports = router 
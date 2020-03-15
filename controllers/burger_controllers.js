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
    console.log("test: ", req.body.addBurger)

    burger.createBurger( [req.body.addBurger, false], function (result) {
        res.json(id.result.burgerId)
        
    })
})

// router.push("/api/burger/:id", function(req, res){
//     var itemdId = "id = " + req.params.id;

//     burger.updateBurger({
//         devoured: req.body.devoured
//     }, itemdId, function(res){
//         if (res.changedRows == 0 ) {
//             return res.status(404).end()
//         } else{
//             res.status(200).end();
//         }
//     })
// })

// Create express app instance.


module.exports = router // some sort of router 
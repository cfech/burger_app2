//Require the orm
var orm = require("../config/orm.js")

//Burger object that builds the get, create and update functions 
var burger = {

    //calling the get all function which calls the all function in the orm
    getAll: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },

    //Calling the create burger function which calls the create function in the orm
    createBurger: function (value, cb) {
        orm.create(value, function (res) {
            cb(res)
        })
    },

    //Calling the update burger function which calls the update function in the orm
    updateBurger: function (objColVals, condition, cb) {
        orm.update(objColVals, condition, function (res) {
            cb(res);
        });
    },
}

//Exporting burger object
module.exports = burger
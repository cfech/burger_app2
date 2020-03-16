var orm = require("../config/orm.js")

var burger = {
    getAll: function (cb) {

        orm.all("burgers", function (res) {
            cb(res);
        })
    },
    createBurger: function (value, cb) {
        console.log("create function model called")
        orm.create(value, function (res) {
            console.log("create burger callback called")
            cb(res)
        })
    },

    updateBurger: function (objColVals, condition, cb) {
        console.log("in update burger function")
        console.log(objColVals)
        console.log(condition)
        orm.update(objColVals, condition, function (res) {
            console.log("calling back model")
            cb(res);
        });
    },
}

module.exports = burger
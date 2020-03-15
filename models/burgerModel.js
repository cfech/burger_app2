var orm = require("../config/orm.js")

var burger = {
    getAll: function (cb) {

        orm.all("burgers", function (res) {
            cb(res);
        })
    },
    createBurger: function (value, cb) {
        orm.create(value, function (res) {
            cb(res)
        })
    },

    updateBurger: function (objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function (res) {
            cb(res);
        });
    },
}

module.exports = burger//whatever object you pu models in 
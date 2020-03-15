var connection = require("./connection") /// ????

connection

var orm = {

    all: function(burger, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          console.log(result)
          cb(result)
        });
      },

      create: function(value, cb) {
        connection.query("INSERT INTO burgers SET ?",
                {
                    burger_name: value[0],
                    devoured: false
        
                }, function (err, res) {
        
                    console.log(" burger inserted!\n")
                    if (err) throw err;
        
                })
      },

      // update: function() {
      //   connection.query("UPDATE burger SET devoured = true WHERE id = 2",
      //           [
      //           ],
      //           function (err, res) { //need to update 
      //               console.log("in connection")
      //               if (err) throw err;
      //               console.log(res.affectedRows + " burger was updated!\n");
        
      //           })
      //   }

}

module.exports = orm
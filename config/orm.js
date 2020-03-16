var connection = require("./connection") /// ????

connection

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}




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
                    cb()
                })
      },

      update: function(objColVals, condition, cb) {
        var queryString = "UPDATE burgers";
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          console.log("calling back orm")
          cb(result);
        });
      },
    
}

module.exports = orm
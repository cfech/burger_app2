//Requiring the connection.js
var connection = require("./connection")

connection

//Turns an object into a a string fro mysql to read
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

//orm object
var orm = {

  //functions to select all burgers
  all: function (burger, cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    });
  },

  //function to create a new burger 
  create: function (value, cb) {
    connection.query("INSERT INTO burgers SET ?",
      {
        burger_name: value[0],
        devoured: false
      }, function (err, res) {
        if (err) throw err;
        cb()
      })
  },

  //Function to update a a burger when it is eaten 
  update: function (objColVals, condition, cb) {

    //Building query string
    var queryString = "UPDATE burgers";
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
}

//Exporting orm object
module.exports = orm
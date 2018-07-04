// we create 'users' collection in newdb database
var url = "mongodb://localhost:27017/jobsDB";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    var dbo=db.db("jobsDB");
    var list= [{ name: "Roshan", age: "22" }, { name: "Sanjeev", age: "29" },{ name: "Manisha", age: "30" }];
 console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
// insert document to 'users' collection using insertOne
    dbo.collection("users").insert(list, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
	db.close();
    });
});
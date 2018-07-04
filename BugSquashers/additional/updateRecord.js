// we create 'users' collection in newdb database
var url = "mongodb://localhost:27017/jobsDB";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    var dbo=db.db("jobsDB");
    var query= { name: "Kanchan", age: "30" };
var newData= {  $set: {name: "Kanchan", age: "35" }};
 console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
// insert document to 'users' collection using insertOne
    dbo.collection("users").updateOne(query, newData, function(err, res){
      if (err){ 
          return console.error(err);
      } else {
        console.log("Record Updated");
      }
	db.close();
    });
 dbo.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
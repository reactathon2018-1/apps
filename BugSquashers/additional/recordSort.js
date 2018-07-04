// we create 'users' collection in newdb database
var url = "mongodb://localhost:27017/jobsDB";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    var dbo=db.db("jobsDB");
    console.log("Switched to "+dbo.databaseName+" database");
   // var mysort = { age: 1 };// ascending 
    var mysort = { age: -1 };// ascending
    dbo.collection("users").find().sort(mysort).toArray(function(err, result) {
   	 if (err) throw err;
    	console.log(result);
    	db.close();
  });
});
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
   var myquery = { name: 'Manisha' };
  dbo.collection("users").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
 dbo.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
var express = require('express');
var app = express();
// we create 'users' collection in newdb database
var url = "mongodb://localhost:27017/jobsDB";
 
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 


app.get('/findJobDetails', function (req, res) {
   

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
     var dbo=db.db("jobsDB");
var query = { jobId : req.param("jobId")};
  dbo.collection("jobDetails").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.end( JSON.stringify(result));
    db.close();
  });
console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
// insert document to 'users' collection using insertOne
   
});

      
});


app.get('/listJobDetails', function (req, res) {
   

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
     var dbo=db.db("jobsDB");

  dbo.collection("jobDetails").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.end( JSON.stringify(result));
    db.close();
  });
console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
// insert document to 'users' collection using insertOne
   
});

      
});

app.listen(8081);
console.log('Running');
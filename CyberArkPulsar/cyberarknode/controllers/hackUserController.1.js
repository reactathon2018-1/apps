var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('Reactathon', server);
 
/*db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'Reactathon' database");
        db.collection('HACK_USERS', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'HACK_USERS' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
    }
});
*/
 
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving user: ' + id);
    db.collection('HACK_USERS', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
   /* db.collection('HACK_USERS', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });*/
    
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Reactathon");
    //var query = { address: /^S/ };
    dbo.collection("HACKUSERS").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      res.send(result);
    });
  });
};
 
exports.adduser = function(req, res) {
    var user = req.body;
    console.log('Adding user: ' + JSON.stringify(user));
    db.collection('HACK_USERS', function(err, collection) {
        collection.insert(user, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
 
exports.updateuser = function(req, res) {
    var id = req.params.id;
    var user = req.body;
    console.log('Updating user: ' + id);
    console.log(JSON.stringify(user));
    db.collection('HACK_USERS', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, user, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating user: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(user);
            }
        });
    });
}
 
exports.deleteuser = function(req, res) {
    var id = req.params.id;
    console.log('Deleting user: ' + id);
    db.collection('HACK_USERS', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
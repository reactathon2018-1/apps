
var url = "mongodb://localhost:27017/Reactathon";

var mongojs = require('mongojs');

var db = mongojs(url);
var mycollection = db.collection('HACK_USERS')

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving user: ' + id);
   
        mycollection.findOne({'_id':mongojs.ObjectId(id)}, function(err, docs) {
            res.send(docs);
        });
    
};
 
exports.findAll = function(req, res) {
    console.log('Retrieving All Users');
    mycollection.find().toArray(function (err, docs) {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            console.log('Success: ' + JSON.stringify(docs));
            res.send(docs);
        } 
    })
};
 
exports.adduser = function(req, res) {
    var user = req.body;
    console.log('Adding user: ' + JSON.stringify(user));
   // db.collection('HACK_USERS', function(err, collection) {
        mycollection.insert(user, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result);
            }
        });
   // });
}
 
exports.updateuser = function(req, res) {
    var id = req.params.id;
    var user = req.body;
    console.log('Updating user: ' + id);
    console.log(JSON.stringify(user));
   // db.collection('HACK_USERS', function(err, collection) {
        mycollection.update({'_id':mongojs.ObjectId(id)}, { $set: user}, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating user: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(user);
            }
        });
    //});
}
 
exports.deleteuser = function(req, res) {
    var id = req.params.id;
    console.log('Deleting user: ' + id);
   // db.collection('HACK_USERS', function(err, collection) {
        mycollection.remove({'_id':mongojs.ObjectId(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
   // });
}
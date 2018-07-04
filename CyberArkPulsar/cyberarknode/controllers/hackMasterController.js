
var url = "mongodb://localhost:27017/Reactathon";

var mongojs = require('mongojs');

var db = mongojs(url);
var mycollection = db.collection('HACK_MASTER')

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving hack: ' + id);
   
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
 
exports.addhack = function(req, res) {
    var hack = req.body;
    console.log('Adding hack: ' + JSON.stringify(hack));
   // db.collection('HACK_USERS', function(err, collection) {
        mycollection.insert(hack, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result);
            }
        });
   // });
}
 
exports.updatehack = function(req, res) {
    var id = req.params.id;
    var hack = req.body;
    console.log('Updating hack: ' + id);
    console.log(JSON.stringify(hack));
   // db.collection('HACK_USERS', function(err, collection) {
        mycollection.update({'_id':mongojs.ObjectId(id) }, { $set: hack}, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating hack: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(hack);
            }
        });
    //});
}
 
exports.deletehack = function(req, res) {
    var id = req.params.id;
    console.log('Deleting hack: ' + id);
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

exports.findAllTeamsByHack = function(req, res) {
    console.log('Retrieving All Teams along with Hackathon Info');
    mycollection.aggregate([
        { $lookup:
           {
             from: 'HACK_TEAM',
             localField: '_id',
             foreignField: 'hack_id',
             as: 'team_info'
           }
         }
        ]).toArray(function(err, doc) {
        if (err) throw err;
        console.log(JSON.stringify(doc));
        res.send(doc);
      });
    };

exports.findAllTeamsByHackId = function(req, res) {
        console.log('Retrieving All Teams for a hackathon');
        mycollection.aggregate([
            { $lookup:
               {
                 from: 'HACK_TEAM',
                 localField: '_id',
                 foreignField: 'hack_id',
                 as: 'team_info'
               }
             },
             {
                $match:{
                   "_id": mongojs.ObjectId(req.params.id)
                }
             }
            ]).toArray(function(err, doc) {
            if (err) throw err;
            console.log(JSON.stringify(doc));
            res.send(doc);
          });
        };
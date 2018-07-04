
var url = "mongodb://localhost:27017/Reactathon";

var mongojs = require('mongojs');

var db = mongojs(url);
var mycollection = db.collection('HACK_USERS');
var mycollection2  = db.collection('HACK_TEAM');

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving hack: ' + id);
   
        mycollection.findOne({'_id':mongojs.ObjectId(id)}, function(err, docs) {
            res.send(docs);
        });
    
};

exports.findParticipantLeaderboard = function(req, res) {
        console.log('Retrieving Participants leaderboard');
        mycollection.aggregate([
            {
                $limit: 10
            },
            { 
                 $sort : {
                      score : -1 
                    } 
            }
            ]).toArray(function(err, doc) {
            if (err) throw err;
            console.log(JSON.stringify(doc));
            res.send(doc);
          });
        };

exports.findHackathonLeaderboard = function(req, res) {
            console.log('Retrieving Hackathons list');
            mycollection2.aggregate([
                {
                    $limit: 10
                },
                { 
                    $group:{
                        _id:{a:"$hack_id"},csum:{$sum:1}}
                },
                { 
                     $sort : {
                        csum : -1 
                        } 
                },
                { $lookup:
                    {
                      from: 'HACK_MASTER',
                      localField: '_id.a',
                      foreignField: '_id',
                      as: 'hack_info'
                    }
                  }
                ]).toArray(function(err, doc) {
                if (err) throw err;
                console.log(JSON.stringify(doc));
                res.send(doc);
              });
            };        

exports.findPie = function(req, res) {
                console.log('Retrieving Hackathons list');
                mycollection2.aggregate([
                    { 
                        $group:{
                            _id:{status:"$status"},csum:{$sum:1}}
                    },
                    { 
                         $sort : {
                            csum : -1 
                            } 
                    }
                    ]).toArray(function(err, doc) {
                    if (err) throw err;
                    console.log(JSON.stringify(doc));
                    res.send(doc);
                  });
                };  

var url = "mongodb://localhost:27017/Reactathon";

var mongojs = require('mongojs');

var db = mongojs(url);
var mycollection = db.collection('HACK_TEAM')

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving team: ' + id);
   
        mycollection.findOne({'_id':mongojs.ObjectId(id)}, function(err, docs) {
            res.send(docs);
        });
    
};

exports.findAll = function(req, res) {
    console.log('Retrieving All Teams along with Hackathon Info');
    mycollection.aggregate([
        { $lookup:
           {
             from: 'HACK_MASTER',
             localField: 'hack_id',
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
 

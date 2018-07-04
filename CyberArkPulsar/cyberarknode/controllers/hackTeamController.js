
var url = "mongodb://localhost:27017/Reactathon";

var mongojs = require('mongojs');

var db = mongojs(url);
var mycollection = db.collection('HACK_TEAM');
var usercollection = db.collection('HACK_USERS');

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving team: ' + id);
   
        mycollection.findOne({'_id':mongojs.ObjectId(id)}, function(err, docs) {
            res.send(docs);
        });
    
};
 
exports.findAll = function(req, res) {
    console.log('Retrieving All Teams');
    mycollection.find().toArray(function (err, docs) {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            console.log('Success: ' + JSON.stringify(docs));

            res.send(docs);
        } 
    })
};
 
exports.addteam = function(req, res) {
    var hack = req.body;
    console.log('Adding Team: ' + JSON.stringify(hack));
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
 
exports.updateteam = function(req, res) {
    var id = req.params.id;
    var hack = req.body;
    console.log('Updating Team: ' + id);
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

        if(hack.criteria){
            var pscore;
            var x=hack.criteria;
            var keys=Object.keys(x);
            for(i=0;i<keys.length;i++){
                console.log(x[keys[i]]);
                console.log(pscore);
                pscore=parseFloat(x[keys[i]])+ (parseFloat(pscore) ? parseFloat(pscore) : 0);
                
            }
            if(hack.participant_ids)
            {
                console.log(pscore);
                var team=hack.participant_ids.split(',');
                var obj={'score':pscore};
            for(i=0;i<team.length;i++){
                console.log(team[i]);
                // usercollection.update({'_id':mongojs.ObjectId(team[i])}, { $set: obj}, {safe:true}, function(err, result) {
                //     if (err) {
                //         console.log('Error updating user: ' + err);
                //        // res.send({'error':'An error has occurred'});
                //     } else {
                //         console.log('' + result + ' document(s) updated');
                //         //res.send(user);
                //     }
                // });
                
                usercollection.findAndModify({
                    query: { _id: mongojs.ObjectId(team[i]) },
                    update: { $set: { score: pscore } }
                }, function (err, doc, lastErrorObject) {
                    // doc.tag === 'maintainer'
                })
            
                
            }
        }

        }
       
}
 
exports.deleteteam = function(req, res) {
    var id = req.params.id;
    console.log('Deleting team: ' + id);
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

exports.findTeamsByUser = function(req, res) {
    console.log('Retrieving Hackathons list');
    console.log(req.params.id);
mycollection.find({participant_ids : new RegExp(req.params.id, 'i')}).toArray(function (err, docs) {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            console.log('Success: ' + JSON.stringify(docs));

            res.send(docs);
        } 
    })
};  

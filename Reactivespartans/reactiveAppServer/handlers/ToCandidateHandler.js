var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/config";

module.exports = {
    teamMsg : function(req, callback) {
        MongoClient.connect(config.db.url, function (err, db) {
            if (err) {
                log.error('Error: ' + err);
                callback(err);
            }
            log.info("Connected to MongoDB");
            log.info("Getting messages for candidate: " + req.emailId);
            // var obj = {
            //     "candidateEmailId" : req.emailId,
            //     "isHiringTeam" : true,
            //     "isCandidate" : false,
            //     "msg" : req.msg,
            //     "timestamp" : new Timestamp()
            // }
            db.collection('interaction').find({
                "candidateEmailId" : req.emailId},
                {_id:0
             }).toArray(function (err, result) {
                 if (err) {
                     log.error("Error: " + err);
                     callback(err);
                 } else {
                     log.info(JSON.stringify(result));
                     db.close();
                     callback(JSON.stringify(result));
 
                
                 }
             });
        });
    }
}
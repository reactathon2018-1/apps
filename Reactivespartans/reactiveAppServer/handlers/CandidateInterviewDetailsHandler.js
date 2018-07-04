var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/config";

module.exports = {
    getCandidateInterviewDetails : function(req, callback) {
        MongoClient.connect(config.db.url, function (err, db) {
            if (err) {
                log.error('Error: ' + err);
                callback(err);
            }
            log.info("Connected to MongoDB");
            log.info("Getting candidate's interview details: " + req.emailId);
            db.collection('candidates').find({
               "emailId" : req.emailId},
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
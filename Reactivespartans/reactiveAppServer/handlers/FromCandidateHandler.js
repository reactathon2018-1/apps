var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/config";

module.exports = {
    candidatemsg : function(req, callback) {
        MongoClient.connect(config.db.url, function (err, db) {
            if (err) {
                log.error('Error: ' + err);
                callback(err);
            }
            log.info("Connected to MongoDB");
            log.info("Sending candidate's message: " + req.msg);
            const tsFormat = () => (new Date());
            var obj = {
                "candidateEmailId" : req.emailId,
                "isHiringTeam" : false,
                "isCandidate" : true,
                "msg" : req.msg,
                "timestamp" : tsFormat
            }
            db.collection('interaction').insert(obj, function (err, result) {
                if (err) {
                    log.error("Error: " + err);
                    callback(err);
                } else {
                    log.info(result.insertedCount);
                    db.close();
                    callback("Success");
                }
            });
        });
    }
}
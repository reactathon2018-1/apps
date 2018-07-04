var MongoClient = require('mongodb').MongoClient;

module.exports = {
    feedbackFromCandidate : function(req, callback) {
        MongoClient.connect(config.db.url, function (err, db) {
            if (err) {
                log.error('Error: ' + err);
                callback(err);
            }
            log.info("Connected to MongoDB");
            log.info("Sending candidate's feedback: " + req.msg);
            const tsFormat = () => (new Date());
            // var obj = {
            //     "emailId" : req.emailId,
            //     "msg" : req.msg
            // }
            var myquery = {"emailId" : req.emailId};
            var setValue = { $set: {"feedbackGiven" : req.msg} };
            db.collection('candidates').updateOne(myquery, setValue, function (err, result) {
                if (err) {
                    log.error("Error: " + err);
                    callback(err);
                } else {
                    log.info("Updated rows: " + JSON.stringify(result.matchedCount));
                    db.close();
                    callback("Success");
                }
            });
        });
    }
}
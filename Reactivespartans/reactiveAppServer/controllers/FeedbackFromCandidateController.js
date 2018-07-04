var Joi = require('joi');

var feedbackFromCandidateHandler = require(rootdir + '/handlers/FeedbackFromCandidateHandler.js');

function validateRequest(req, callback) {
    log.info("/feedbackFromCandidate, Validating request object");
    var isValid = false;
    const reqSchema = Joi.object().keys({
        msg : Joi.string().required(),
        emailId : Joi.string().email().required()
    });

    const result = Joi.validate(req, reqSchema);

    if(result.error === null) {
        log.info("/feedbackFromCandidate, Request is valid");
        isValid = true;
    } else {
        log.error("/feedbackFromCandidate, Invalid request");
        isValid = false;
    }
    callback(isValid);
}

module.exports = {
    feedbackFromCandidate : function(req, callback) {
        log.info("/feedbackFromCandidate, req: " + JSON.stringify(req.body));
        validateRequest(req.body, function(isValid) {
            if(isValid) {
                feedbackFromCandidateHandler.feedbackFromCandidate(req.body, function(resp) {
                    callback(resp);
                });
            } else {
                callback({"statusCode ": 400, "msg" : "Bad Request"});
            }
        });
    }
}
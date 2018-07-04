var Joi = require('joi');

var candidateService = require(rootdir + '/handlers/CandidateInterviewDetailsHandler.js');

function validateRequest(req, callback) {
    log.info("/candidateInterviewDetails, Validating request object: " + JSON.stringify(req));
    var isValid = false;
    const reqSchema = Joi.object().keys({
        emailId : Joi.string().email().required()
    });

    const result = Joi.validate(req, reqSchema);

    if(result.error === null) {
        log.info("/candidateInterviewDetails, Request is valid");
        isValid = true;
    } else {
        log.error("/candidateInterviewDetails, Invalid request");
        isValid = false;
    }
    callback(isValid);
}

module.exports = {
    getCandidateInterviewDetails : function(req, callback) {
        log.info("/candidateInterviewDetails, req: " , JSON.stringify(req.query));
        validateRequest(req.query, function(isValid) {
            if(isValid) {
                candidateService.getCandidateInterviewDetails(req.query, function(resp) {
                    callback(resp);
                });
            } else {
                callback({"statusCode ": 400, "msg" : "Bad Request"});
            }
        });
    }
}
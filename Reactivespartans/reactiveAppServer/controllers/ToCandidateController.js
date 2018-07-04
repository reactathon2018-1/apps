var Joi = require('joi');

var toCandidateHandler = require(rootdir + '/handlers/ToCandidateHandler.js');

function validateRequest(req, callback) {
    log.info("/teamMsg, Validating request object");
    var isValid = false;
    const reqSchema = Joi.object().keys({
        emailId : Joi.string().email().required()
    });

    const result = Joi.validate(req, reqSchema);

    if(result.error === null) {
        log.info("/teamMsg, Request is valid");
        isValid = true;
    } else {
        log.error("/teamMsg, Invalid request");
        isValid = false;
    }
    callback(isValid);
}

module.exports = {
    teamMsg : function(req, callback) {
        log.info("/teamMsg, req: " + JSON.stringify(req.query));
        validateRequest(req.query, function(isValid) {
            if(isValid) {
                toCandidateHandler.teamMsg(req.query, function(resp) {
                    callback(resp);
                });
            } else {
                callback({"statusCode ": 400, "msg" : "Bad Request"});
            }
        });
    }
}
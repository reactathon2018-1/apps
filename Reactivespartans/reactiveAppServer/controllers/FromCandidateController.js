var Joi = require('joi');

var fromCandidateService = require(rootdir + '/handlers/FromCandidateHandler.js');

function validateRequest(req, callback) {
    log.info("/candidatemsg, Validating request object");
    var isValid = false;
    const reqSchema = Joi.object().keys({
        msg : Joi.string().required(),
        emailId : Joi.string().email().required()
    });

    const result = Joi.validate(req, reqSchema);

    if(result.error === null) {
        log.info("/candidatemsg, Request is valid");
        isValid = true;
    } else {
        log.error("/candidatemsg, Invalid request");
        isValid = false;
    }
    callback(isValid);
}

module.exports = {
    candidatemsg : function(req, callback) {
        log.info("/candidatemsg, req: " + JSON.stringify(req.body));
        validateRequest(req.body, function(isValid) {
            if(isValid) {
                fromCandidateService.candidatemsg(req.body, function(resp) {
                    callback(resp);
                });
            } else {
                callback({"statusCode ": 400, "msg" : "Bad Request"});
            }
        });
    }
}
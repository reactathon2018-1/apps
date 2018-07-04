/*global rootdir,config*/
var express = require('express');
var router = express.Router();
var candidateController = require(rootdir + '/controllers/CandidateInterviewDetailsController.js');
var fromCandidateController = require(rootdir + '/controllers/FromCandidateController.js');
var toCandidateController = require(rootdir + '/controllers/ToCandidateController.js');
var feedbackFromCandidateController = require(rootdir + '/controllers/FeedbackFromCandidateController.js');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET Candidate Interview Details. */
router.get('/candidateInterviewDetails', function(req, res) {
  log.info("'/candidateInterviewDetails");
  candidateController.getCandidateInterviewDetails(req, function(response) {
    res.send(response);
  });
});

router.post('/fromCandidate', function(req, res) {
  log.info("'/fromCandidate");
  fromCandidateController.candidatemsg(req, function(response) {
    res.send(response);
  });
});

router.get('/toCandidate', function(req, res) {
  log.info("'/toCandidate");
  toCandidateController.teamMsg(req, function(response) {
    res.send(response);
  });
});

router.post('/feedbackFromCandidate', function(req, res) {
  log.info("'/feedbackFromCandidate");
  feedbackFromCandidateController.feedbackFromCandidate(req, function(response) {
    res.send(response);
  });
});


module.exports = router;
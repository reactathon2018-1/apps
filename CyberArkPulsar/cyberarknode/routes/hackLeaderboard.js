

var express= require('express');//.Router;
var app=express.Router();

var cntr= require('../controllers/LeaderboardController.js');

app.route('/participantLeaderboard').get(cntr.findParticipantLeaderboard);
app.route('/hackathonLeaderboard').get(cntr.findHackathonLeaderboard);
app.route('/findPie').get(cntr.findPie);


module.exports=app;
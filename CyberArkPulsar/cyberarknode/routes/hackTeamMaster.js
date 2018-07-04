

var express= require('express');//.Router;
var app=express.Router();

var cntr= require('../controllers/hackTeamMasterController.js');

app.route('/teamsMaster').get(cntr.findAll);


module.exports=app;
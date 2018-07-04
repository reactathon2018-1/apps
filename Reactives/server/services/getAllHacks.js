'use strict';
var express = require('express');
var router = express.Router();
router.get('/', function(req,res,next){
var mongoose = require('mongoose');
var dbService = require('./dbService');
var Hackathon = require('../models/hackModel');
Hackathon.find(function(err, cb){
  if(err){
    console.log(err);
  }
  //console.log(cb);
  res.send(cb);
 });


  });
module.exports = router;

'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
var mongoose = require('mongoose');
var dbService = require('./dbService');
var Hackathon = require('../models/hackModel');

var data = [
  {
    name: 'Hack1',
    description: 'hack1 is first one',
    created_at: new Date().setFullYear((new Date().getFullYear() - 25)),
    ending_at:new Date().setFullYear((new Date().getFullYear() - 25)),
    status: 'inprogress',
    total_participants: 2,
    winner: 'somename'
  },
  {
    name: 'Hack2',
    description: 'hack2 is first one',
    created_at: new Date().setFullYear((new Date().getFullYear() - 25)),
    ending_at:new Date().setFullYear((new Date().getFullYear() - 25)),
    status: 'inprogress',
    total_participants: 3,
    winner: 'somename'
  },
  {
    name: 'Hack3',
    description: 'hack3 is first one',
    created_at: new Date().setFullYear((new Date().getFullYear() - 25)),
    ending_at:new Date().setFullYear((new Date().getFullYear() - 25)),
    status: 'inprogress',
    total_participants: 3,
    winner: 'somename'
  },
  {
    name: 'Hack4',
    description: 'hack4 is first one',
    created_at: new Date().setFullYear((new Date().getFullYear() - 25)),
    ending_at:new Date().setFullYear((new Date().getFullYear() - 25)),
    status: 'inprogress',
    total_participants: 3,
    winner: 'somename'
  }
];
Hackathon.collection.insert(data, function (err, docs) {
    if (err){
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });


  });
module.exports = router;

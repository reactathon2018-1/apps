/*global rootdir,config,log*/

//Initialize global variables here
global.rootdir = __dirname;
global.config = require('./config/config.json');
global.log = require(rootdir+'/util/LogUtil');

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs-extra');
var request = require('request');
var port = process.env.PORT || config.port
app.use(bodyParser.json());
app.use(cors());

var routes = require(__dirname + '/routes/index.js');

app.use('/', routes);

app.listen(port);
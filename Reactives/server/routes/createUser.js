var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){

  var mongoose = require('mongoose');

//Set up default mongoose connection
//var mongoDB = 'mongodb://127.0.0.1:27071/reactives';
//mongoose.connect(mongoDB);
mongoose.connect('mongodb://127.0.0.1:27017/reactives').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log('Inside 1');
var resp = '';
var User = require('../models/userTb');

console.log('Inside 2');
var firstName =  req.query.first_name;
var lastName =  req.query.last_name;
var emailId = req.query.email_id;
var password = req.query.password;
var userType = req.query.user_type;
console.log('emailId : '+emailId);
console.log('Password : '+password);
var User = require('../models/userTb');

// create a new user
var newUser = User({
  first_name: firstName,
  last_name: lastName,
  email_id: emailId,
  password: password,
  user_type:userType,
  badge_id:1
});

// save the user
newUser.save(function(err) {
  if (err){
    console.log('error : '+err);
    res.send("{\"ok\":false}");
    throw err;}

  console.log('User created!');
  res.send("{\"ok\":true}");
});
console.log('Inside 3 : '+resp);

});

module.exports = router;

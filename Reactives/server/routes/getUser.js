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
var emailId = req.query.email_id;
var password = req.query.password;
console.log('emailId : '+emailId);
console.log('Password : '+password);
var usersProjection = { 
  __v: false,
  _id: false
};
User.find({$and:[{"email_id":emailId},{"password": password}]},usersProjection,
function(err, users) {
  console.log('Inside 2.5');
  if (err) {
    console.log('error:' +err);
    res.send("{\"ok\":false}");
    throw err;
  }

  // object of all the users

  console.log('users type : '+typeof(users));
  if(users.length > 0)
    res.send(JSON.stringify(users[0]));
  else
  res.send("{\"ok\":false}");
});
/*var User = require('../models/userTb');

// create a new user
var newUser = User({
  first_name: 'Peter',
  last_name: 'Quill',
  email_id: 'peter@gog.com',
  password: 'password',
  user_type:1
});

// save the user
newUser.save(function(err) {
  if (err){
    console.log('error : '+err);
    throw err;}

  console.log('User created!');
});*/
console.log('Inside 3 : '+resp);

});

module.exports = router;

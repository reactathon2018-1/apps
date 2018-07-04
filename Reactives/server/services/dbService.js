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
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = db;

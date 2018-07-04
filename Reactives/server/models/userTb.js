var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var userSchema = new Schema({
   first_name: String,
   last_name:   String,
   email_id: String,
   password: String,
   user_type: Number,
   badge_id: Number
 });

 var User = mongoose.model('user_tbs', userSchema);


 module.exports = User;

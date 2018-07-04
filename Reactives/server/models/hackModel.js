var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hackathonSchema = new Schema({
   name: { type: String, required: true},
   description:   String,
   status: String,
   created_at: Date,
   ending_at: Date,
   total_participants:Number,
   winner:String
});

//Model object
// hackathonSchema.methods.findByName(name, function(err, cb){
//   return this.model('Hackathon_db').find({ name: this.name }, cb);
// });
// hackathonSchema.static('findByName', function (name, callback) {
//   return this.find({ name: name }, callback);
// });
  hackathonSchema.statics.findByName = function(name, cb) {
    return this.find({ name: new RegExp(name, 'i') }, cb);
  };
  hackathonSchema.statics.updateWinner = function(name, winnername){
    var query = {name: name};
    return this.findOneAndUpdate(query,{$set:{winner:winnername}},{new: true}, function (err, docs) {
      if (err) return handleError(err);
  });

};
 var hackModel = mongoose.model('Hackathon_dbs', hackathonSchema);
//methods

// hackModel.findByName(name, function(err, docs){
//   this.find({ name: name}, function (err, docs) {
//     if(err){
//       console.log('findByName error : '+ err);
//       throw err;
//     }
//     res.send(docs);
//   });
// });
// hackModel.find(function(err, docs){
//   if (err){
//     console.log('error : '+ err);
//     throw err;
//   }
//   console.log('hackathon returned!');
//   //res.send(docs);
// });
//
// hackModel.save(function(err) {
//   if (err){
//     console.log('error : '+err);
//     throw err;
//   }
//   console.log('hackathon created!');
//   res.send("Doc saved");
// });
// hackModel.updateWinner(name, winnername, function(err, docs){
//   this.findOneAndUpdate({name: name},{$set:{winner:winnername}},{new: true}, function (err, docs) {
//     if(err){
//       console.log('updateWinner error : '+ err);
//       throw err;
//     }
//     res.send(docs);
//     console.log("Updated doc returned");
//   });
// });
//
// hackModel.updateTotalParticipants(name,totalNo, function(err, docs){
//   this.findOneAndUpdate({name: name},{$set:{total_participants:totalNo}},{new: true}, function (err, docs) {
//     if(err){
//       console.log('updateTotalParticipants error : '+ err);
//       throw err;
//     }
//     res.send(docs);
//     console.log("Updated doc returned");
//   });
// });
module.exports = hackModel;

// we create 'users' collection in newdb database
var url = "mongodb://localhost:27017/jobsDB";
var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect(url);
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
var bodyParser= require('body-parser');
var express = require('express');
var app = express();
 var candidateSchema = new mongoose.Schema({
	fullName:String,
	age:String,
	candidateId:String,
	qualification:String,
	skills:String,
	experience:String,
	jobId:String,
	address:String,
	email:String,
	mobileNo:String

},{collection: 'Candidate_Details'},{versionKey:false});

var jobDetailsSchema = new mongoose.Schema({
	jobId:String,
	coreSkils:String,
	position:String,
	location:String,
	noOfOpenings:String

},{collection: 'jobDetails'},{versionKey:false});

var interviewScheduleSchema = new mongoose.Schema({
	jobId:String,
	date:String,
	time:String,
	candidateId:String,
	interviewerName:String

},{collection: 'Interview_Schedule'},{versionKey:false});

var interviewFeedbackSchema = new mongoose.Schema({
	jobId:String,	
	candidateId:String,
	interviewerFeedback:String,
hrFeedback:String,
	candidateFeedback:String,
	status:String

},{collection: 'Interview_Feedback'},{versionKey:false});

var candidateDocumentsSchema = new mongoose.Schema({
	jobId:String,	
	candidateId:String,
	documentPath:String,
	document1:{}	

},{collection: 'Candidate_Documents'},{versionKey:false});

var InterviewSchedule= mongoose.model("InterviewSchedule",interviewScheduleSchema) ;
var InterviewFeedback = mongoose.model("InterviewFeedback",interviewFeedbackSchema) ;
var CandidateDocuments = mongoose.model("CandidateDocuments",candidateDocumentsSchema) ;


var Candidate = mongoose.model("Candidate",candidateSchema) ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/saveCandidateDetails', function (req, res) {
var cadidate = new Candidate(req.body); 
if(req.body.candidateId == null || req.body.candidateId === ""){
	cadidate.candidateId=req.body.fullName.substring(0, 4)+"_"+req.body.mobileNo.substring(0, 2);
} 
Candidate.findOneAndUpdate({$or:[{email:req.body.email},{candidateId:req.body.candidateId}]},cadidate ,{upsert:true,new:true},function(err,doc){
 if (err){ 
         console.error(err);
	res.send("Profile already exists,Enter different email id and try again");
      } else {
        console.log("Inserted/Updated  to Candidate_Details");
	res.send("Successfully added candidate Details candidate Id:"+cadidate.candidateId);
      }
});

});

 
app.get('/getJobAndCandidate', function (req, res) {
   

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
     var dbo=db.db("jobsDB");
var query = { jobId : req.param("jobId")};
  dbo.collection("Interview_Feedback").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.end( JSON.stringify(result));
    db.close();
  });
console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
// insert document to 'users' collection using insertOne
   
});

      
});



app.post('/getCandidateDetails', function (req, res) {
var cadidate = new Candidate(req.body);  
Candidate.find({email:req.body.email},function(err,doc){
 if (err){ 
         console.error(err);
res.send(err);
      } else {
        console.log("get Candidate details success");
res.send(doc);
      }
});

});


 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 


app.get('/findJobDetails', function (req, res) {
   

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
     var dbo=db.db("jobsDB");
var query = { jobId : req.param("jobId")};
  dbo.collection("jobDetails").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.end( JSON.stringify(result));
    db.close();
  });
console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
// insert document to 'users' collection using insertOne
   
});

      
});


app.get('/listJobDetails', function (req, res) {
   

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
     var dbo=db.db("jobsDB");

  dbo.collection("jobDetails").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.end( JSON.stringify(result));
    db.close();
  });
console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
// insert document to 'users' collection using insertOne
   
});

      
});

app.post('/searchJobsDetails', function (req, res) {
MongoClient.connect(url, function(err, db) {
var dbo=db.db("jobsDB"); 
var query = {coreSkils:{$regex:'.*'+req.body.coreSkils+'.*',$options:'i'}};
dbo.collection("jobDetails").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.end( JSON.stringify(result));
    db.close();
  });});
});

app.post('/saveInterviewSchedules', function (req, res) {
var interviewSchedule = new InterviewSchedule(req.body);  
InterviewSchedule.findOneAndUpdate({jobId:req.body.jobId,candidateId:req.body.candidateId},interviewSchedule ,{upsert:true,new:true},function(err,doc){
 if (err){ 
         console.error(err);
res.send(err);
      } else {
        console.log("Inserted/Updated  to InterviewSchedules");
res.send("Success");
      }
});

});


app.post('/saveInterviewFeedback', function (req, res) {
var interviewFeedback = new InterviewFeedback(req.body);  
InterviewFeedback.findOneAndUpdate({jobId:req.body.jobId,candidateId:req.body.candidateId},interviewFeedback ,{upsert:true,new:true},function(err,doc){
 if (err){ 
         console.error(err);
res.send(err);
      } else {
        console.log("Inserted/Updated  to InterviewFeedback");
res.send("Success");
      }
});

});

app.post('/getInterviewFeedback', function (req, res) {
MongoClient.connect(url, function(err, db) {
var dbo=db.db("jobsDB"); 
var query = {candidateId:req.body.candidateId};
dbo.collection("Interview_Feedback").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.end( JSON.stringify(result));
    db.close();
  });});
});



var fs = require('fs');
var Binary = require('mongodb').Binary;


app.post('/saveCandidateDocuments', function (req, res) {
var candidateDocuments = new CandidateDocuments(req.body);
var insert_data ={};
var data = fs.readFileSync(req.body.documentPath)
insert_data.file_data= Binary(data);
candidateDocuments.document1= insert_data; 
CandidateDocuments.findOneAndUpdate({jobId:req.body.jobId,candidateId:req.body.candidateId},candidateDocuments ,{upsert:true,new:true},function(err,doc){
 if (err){ 
         console.error(err);
res.send(err);
      } else {
        console.log("Inserted/Updated  to CandidateDocuments");
res.send("Success");
      }
});

});

app.listen(8081);
console.log('Running');
var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var mongoose = require('mongoose');
const { makeExecutableSchema } = require('graphql-tools')
const Schema = mongoose.Schema;


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

},{collection: 'Candidate_Details'});

var candidate_detail= mongoose.model("Candidate",candidateSchema) ;


var jobDetailsSchema = new mongoose.Schema({
	jobId:String,
	coreSkils:String,
	position:String,
	location:String,
	noOfOpenings:String

},{collection: 'jobDetails'},{versionKey:false});

var job_detail= mongoose.model("JobDetail",jobDetailsSchema) ;


const typeDefs = 
`type Candidate {
  _id: String
  candidateId: String
  email:String
 
}
type JobDetail {
  	jobId: String 
	coreSkils:String,
	position:String,
	location:String,
	noOfOpenings:String
}


type Query {
  candidate(candidateId: String): Candidate
  candidates: [Candidate]
  job(jobId: String):JobDetail	 
  jobs:[JobDetail]
}`


const resolvers = {
  Query: {
    candidate: async (candidateId) => {
      return (await candidate_detail.findOne(candidateId))
    },
    candidates: async () => {
      return (await candidate_detail.find({}))
    },
    job: async (candidateId) => {
      return (await job_detail.findOne(jobId))
    },
    jobs: async () => {
      return (await job_detail.find({}))
    },
  },
}


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
  schema,
  pretty: true,
  graphiql: true
}));

mongoose.connect('mongodb://localhost:27017/jobsDB')
var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
})
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
import React, { Component } from 'react';
import './InterviewerFeedback.css';

class HRFeedback extends Component {
	
	state = {
		response: [],
		jobAndCandidateResponse:[],
		interviewFeedbackResponse:[],
		jobid: '',
		selectcandidate:'',
		candidatestatus:'',
		interviewerFeedback:'',
		hrFeedback:'',
		autoId:''
  };
  
  
  componentDidMount() {
    this.callLoadJobAndCandidate()
      .then(res => this.setState({ jobAndCandidateResponse: res}))
      .catch(err => console.log(err));
  }

  callLoadJobAndCandidate = async () => {
    const jobAndCandidateResponse = await fetch('/graphql', {
        method: 'POST',
		headers: {
    'Accept': 'application/graphql',
    'Content-Type': 'application/graphql',
  },
        body: 'query{jobs {jobId}candidates{candidateId}}'
      });
	
	console.log(jobAndCandidateResponse+'jobAndCandidateResponse');
    const body = await jobAndCandidateResponse.json();
	console.log(body);
    if (jobAndCandidateResponse.status !== 200) throw Error(body.message);

    return body;
  };
  
  
  render() {
	 
	
	
    return (
	<form className="content-body" action=""> 
		<h3> Feedback </h3>
		<p> 
			<label htmlFor="jobid" className="jobid">Select Job*</label>
			<select className="form-control" name="jobid" value={this.state.jobid} onChange={this.jobIdChange}>
			<option value="volvo">Select</option>
			
			</select>
		</p>

	   <p> 
		<label htmlFor="selectcandidate" className="selectcandidate">Select Candidate*</label>
			<select className="form-control" name="selectcandidate" value={this.state.selectcandidate} onChange={this.handleSelectCandidateChange}>
			<option value="volvo">Select</option>

				
			</select>
		</p>

		<p> 
			<label htmlFor="interviewerfeedback" className="interviewerfeedback">Interviewer Feedback*</label>
			<textarea id="interviewerfeedback" className="form-control" name="interviewerfeedback" required="required" rows="4" cols="50" value={this.state.interviewerFeedback} onChange={this.handleInterviewFeedbackChange}>
		</textarea>
		</p>						
		
		<p>
		<input id="autoId" name="autoId"  type="hidden" value={this.state.autoId} />
		</p>
								
		<p className="signin button" align="right">
			<input type="button" className="btn btn-success" value="Submit Feedback" onClick={(e)=>this.submitFeedback()}/> 
		</p>
		

  
  
  
		</form>);
  }
}
export default HRFeedback;
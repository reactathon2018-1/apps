import React, { Component } from 'react';
import './HRFeedback.css';

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
  
   jobIdChange = (e) =>{
   this.setState({jobid: e.target.value});
}

handleSelectCandidateChange = (e) =>{
   this.setState({selectcandidate: e.target.value});
    this.getInterviewFeedback()
      .then(res => this.setState({ interviewFeedbackResponse: res}))
      .catch(err => console.log(err));
}
getInterviewFeedback = async () => {
	  let getInterviewFeedbackRequest={
		  candidateId: this.state.selectcandidate
		  }
	 const response = await fetch('/getInterviewFeedback', {
        method: 'POST',
		headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
        body: JSON.stringify(getInterviewFeedbackRequest)
      });
	  
	  const body = await response.json();
	
    if (response.status !== 200) throw Error(body.message);

    return body; 
  };

handleCandidateStatusChange = (e) =>{
   this.setState({candidatestatus: e.target.value});
}

handleInterviewFeedbackChange = (e) =>{
   this.setState({interviewerFeedback: e.target.value});
}

handleHrFeedbackChange = (e) =>{
   this.setState({hrFeedback: e.target.value});
}


submitFeedback = () => {
   console.log('submitFeedback Called');
	this.callApi()
      .then(res => this.setState({ response: res}))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
	  let submitFeedbackRequest={
		  jobId: this.state.jobid,
		  interviewerFeedback: this.state.interviewerFeedback,
		  hrFeedback: this.state.hrFeedback,
		  candidateId: this.state.selectcandidate,
		  status: this.state.candidatestatus,
		  _id:this.state.autoId
		  }
	 const response = await fetch('/saveInterviewFeedback', {
        method: 'POST',
		headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
        body: JSON.stringify(submitFeedbackRequest)
      });
	  
	  const body = await response.json();
	
    if (response.status !== 200) throw Error(body.message);

    return body;
	  
	  
	  
  };
  
  componentDidMount() {
    this.callLoadJobAndCandidate()
      .then(res => this.setState({ jobAndCandidateResponse: res}))
      .catch(err => console.log(err));
  }

  callLoadJobAndCandidate = async () => {
    const jobAndCandidateResponse = await fetch('/getJobAndCandidate');
	
    const body = await jobAndCandidateResponse.json();
	
    if (jobAndCandidateResponse.status !== 200) throw Error(body.message);

    return body;
  };
  
  
  render() {
	  
	  const jobIdResponse = this.state.jobAndCandidateResponse.map((item, i) => (
      
  <option value={item.jobId}>{item.jobId}</option>
	  
    ));
	
	 const candidateIdResponse = this.state.jobAndCandidateResponse.map((item, i) => (
      <option value={item.candidateId}>{item.candidateId}</option>
    ));
	
	this.state.interviewFeedbackResponse.map((item, i) => (
	  this.state.interviewerFeedback = item.interviewerFeedback,
	  this.state.autoId = item._id
    ));
	
    return (
	<form className="content-body" action=""> 
		<h3> Feedback </h3>
		<p> 
			<label htmlFor="jobid" className="jobid">Select Job*</label>
			<select className="form-control" name="jobid" value={this.state.jobid} onChange={this.jobIdChange}>
			<option value="volvo">Select</option>
				{ jobIdResponse }
			</select>
		</p>

	   <p> 
		<label htmlFor="selectcandidate" className="selectcandidate">Select Candidate*</label>
			<select className="form-control" name="selectcandidate" value={this.state.selectcandidate} onChange={this.handleSelectCandidateChange}>
			<option value="volvo">Select</option>
				{candidateIdResponse}
			</select>
		</p> 
		<p> 
			<label htmlFor="candidatestatus" className="candidatestatus">Select Status*</label>
			<select className="form-control" name="candidatestatus" value={this.state.candidatestatus} onChange={this.handleCandidateStatusChange}>
			  <option value="volvo">Select</option>
			  <option value="volvo">Rejected</option>
			  <option value="saab">Selected</option>
			</select>
		</p> 


		<p> 
			<label htmlFor="interviewerfeedback" className="interviewerfeedback">Interviewer Feedback*</label>
			<textarea id="interviewerfeedback" className="form-control" name="interviewerfeedback" required="required" rows="4" cols="50" disabled="true" value={this.state.interviewerFeedback} onChange={this.handleInterviewFeedbackChange}>
		</textarea>
		</p>						
		<p>
			<label htmlFor="hrfeedback" className="hrfeedback">Feedback*</label>
			<textarea id="hrfeedback" className="form-control" name="hrfeedback" required="required" placeholder="Please enter feedback." rows="4" cols="50" value={this.state.hrFeedback} onChange={this.handleHrFeedbackChange}>
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
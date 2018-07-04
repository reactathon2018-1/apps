import React, { Component } from 'react';
import './CandidateFeedback.css';

class CandidateFeedback extends Component {
	state = {
		candidateFeedbackResponse: [],
		jobid: '',
		candidateId:'',
		candidatestatus:'',
		candidateFeedback:'',
		autoId:''
  };
  
	
handleCandidateIdChange = (e) =>{
   this.setState({candidateId: e.target.value});
    
}

getCandidateDetails = () => {
   this.getInterviewFeedback()
      .then(res => this.setState({ candidateFeedbackResponse: res}))
      .catch(err => console.log(err));
	  
  }


getInterviewFeedback = async () => {
	  let getCandidateFeedbackRequest={
		  candidateId: this.state.candidateId
		  }
	 const response = await fetch('/getInterviewFeedback', {
        method: 'POST',
		headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
        body: JSON.stringify(getCandidateFeedbackRequest)
      });
	  
	  const body = await response.json();
	
    if (response.status !== 200) throw Error(body.message);

    return body; 
  };
  
  
  render() {
	  this.state.candidateFeedbackResponse.map((item, i) => (
	  this.state.jobid = item.jobid,
	  this.state.candidatestatus = item.candidatestatus,
	  this.state.autoId = item._id
    ));
	
    return (<form className="content-body" action=""> 

                                <h3> Candidate Feedback </h3> 
                                
								<p> 
                                    <label htmlFor="candidateId" className="candidateId">Enter Candidate Id*</label>
                                    <input id="candidateId" className="form-control" name="candidateId" required="required" type="text" value={this.state.candidateId} onChange={this.handleCandidateIdChange}/>
									
                                </p>
								<p className="signin button" align="right"> 
									<input type="button" className="btn btn-success" value="Get Details" onClick={this.getCandidateDetails}/> 
								</p>
								
								 <p> 
                                    <label htmlFor="jobid" className="jobid">Job Id*</label>
                                    <input id="jobid" className="form-control" name="jobid" required="required" type="text" disabled="true" value={this.state.jobid} />
                                </p>
								
								<p> 
                                    <label htmlFor="jobstatus" className="jobstatus">Status*</label>
                                    <input id="jobstatus" className="form-control" name="jobstatus" required="required" type="text" disabled="true" value={this.state.candidatestatus} />
                                </p>
								
								
								<p> 
                                    <label htmlFor="candidatefeedback" className="candidatefeedback" >Feedback*</label>
									
									<textarea id="candidatefeedback" className="form-control" name="candidatefeedback" required="required" placeholder="Please enter feedback."  rows="4" cols="50" value={this.state.candidateFeedback} >
</textarea>


                                   
                                </p>
								
								<p> 
                                    <label htmlFor="documents" className="documents">Upload Documents*</label>
									
								<input id="documents" className="form-control" name="documents"  type="file" multiple/>
								</p>
								<p>
		<input id="autoId" name="autoId"  type="hidden" value={this.state.autoId} />
		</p>
                               <p className="signin button" align="right"> 
									<input type="button" className="btn btn-success" value="Submit Feedback"/> 
								</p>
                                
                            </form>);
  }
}

export default CandidateFeedback;
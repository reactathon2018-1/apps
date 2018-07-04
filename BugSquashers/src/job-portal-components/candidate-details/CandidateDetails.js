import React, { Component } from 'react';
import './CandidateDetails.css';

class CandidateDetails extends Component {
	
	constructor(props) {
        super(props);
        this.state._jobId= this.props;
    };
	
	state = {	
	_fullName: '',
    _age: '',
	_candidateId: '',
	_qualification: '',
	_skills: '',
	_experience: '',
	_jobId: '',
	_address: '',
	_email: '',
	_contactDetails: '',
	_mobileNo: '',
	_id: ''
	
  };
	
	applyForJob = (jobId) => {
    

			let candidate_details={
				jobId:this.state._jobId,
				fullName:this.state._fullName,
				age:this.state._age,
				qualification:this.state._qualification,
				skills:this.state._skills,
				experience:this.state._experience,
				jobId:this.state._jobId,
				address:this.state._address,
				email:this.state._email,
				mobileNo:this.state._mobileNo,
			

			}

				fetch('/saveCandidateDetails', {
			  method: 'POST',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(candidate_details)
			})
			.then(function(resp){
				// your response
			})

	}
	 handleJobIdSetChange = (e) =>{
		   this.setState({_jobId: e.target.value});
		}
	 handleFullNameSetChange = (e) =>{
		   this.setState({_fullName: e.target.value});
		}
		 
	handleEmailSetChange = (e) =>{
		   this.setState({_email: e.target.value});
	} 
	handleContactNoSetChange = (e) =>{
		  this.setState({_mobileNo: e.target.value});
	} 
	handleAgeSetChange = (e) =>{
		  this.setState({_age: e.target.value});
	} 
	handleQualificationSetChange = (e) =>{
		 this.setState({_qualification: e.target.value});
	}
	handleSkillesSetChange = (e) =>{
		 this.setState({_skills: e.target.value});
	} 
	handleExperienceSetChange = (e) =>{
		  this.setState({_experience: e.target.value});
	}
	handleAddressSetChange = (e) =>{
		  this.setState({_address: e.target.value});
	}
  render() {
    return (
	
	
	<div className="content-body candidateClass" id="register">
	<h3>Please Enter your Details:</h3>
                            <form > 
								 <p> 
                                    <label htmlFor="jobIdsignup" className="jobid" data-icon="u">Enter Job Id</label>
                                    <input id="jobIdsignup" className="form-control" value={this.state._jobId} name="jobIdsignup" onChange={this.handleJobIdSetChange} required="required" type="number" />
                                </p>
                                <p> 
                                    <label htmlFor="_fullName" className="uname" data-icon="u">Enter Full Name</label>
                                    <input id="_fullName" className="form-control" value={this.state._fullName} name="_fullName" onChange={this.handleFullNameSetChange} required="required" type="text" />
                                </p>
                                <p> 
                                    <label htmlFor="emailsignup" className="youmail" data-icon="e" > Enter Email</label>
                                    <input id="emailsignup" className="form-control" value={this.state._email} name="emailsignup" onChange={this.handleEmailSetChange} required="required" type="email" placeholder="abc@gmail.com"/> 
                                </p>
								<p> 
                                    <label htmlFor="contactnumbersignup" className="contactnumbersignup">Enter Contact No. </label>
                                    <input id="contactnumbersignup" className="form-control" value={this.state._mobileNo} name="contactnumbersignup"  type="number" onChange={this.handleContactNoSetChange}  required="required" placeholder="9876543210"/>
                                </p>
                                
								<p> 
                                    <label htmlFor="agesignup" className="agesignup">Enter Age </label>
                                    <input id="agesignup" className="form-control" value={this.state._age} name="agesignup" onChange={this.handleAgeSetChange} required="required" type="number"  placeholder="25" />
                                </p>
								<p> 
                                    <label htmlFor="highestqualsignup" className="highestqualsignup">Enter Highest Qualification </label>
                                    <input id="highestqualsignup" className="form-control" value={this.state._qualification} name="highestqualsignup" onChange={this.handleQualificationSetChange} required="required" placeholder="B. Tech"/>
                                </p>
								<p> 
                                    <label htmlFor="skillssignup" className="skillssignup">Enter Skill Set </label>
                                    <input id="skillssignup" className="form-control" value={this.state._skills} name="skillssignup" onChange={this.handleSkillesSetChange} required="required" placeholder="Java, J2EE"/>
                                </p>
								<p> 
                                    <label htmlFor="experiencesignup" className="experiencesignup">Enter Your Experience ('In Years') </label>
                                    <input id="experiencesignup" className="form-control" value={this.state._experience} name="experiencesignup" onChange={this.handleExperienceSetChange} required="required" placeholder="3"/>
                                </p>
								<p> 
                                    <label htmlFor="addresssignup" className="addresssignup">Enter Your Address </label>
                                    <input id="addresssignup" className="form-control" value={this.state._address} name="addresssignup" onChange={this.handleAddressSetChange} required="required" placeholder="3"/>
                                </p>
                                
                                <p className="signin button" align="right"> 
									<input type="button" className="btn btn-success" align="right" value="Sign up" onClick={(e)=>this.applyForJob()}/> 
								</p>
                                
                            </form>
                        </div>
						
	
	);
  }
}

export default CandidateDetails;
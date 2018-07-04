import React, { Component } from 'react';
import './SearchJobs.css';
import CandidateDetails from '../candidate-details/CandidateDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class SearchJobs extends Component {
	
	
	state = {
		response: [],
    skillSet: ''
	
  };
  
  


	searchJobs = () => {
   console.log('Called');
	this.callApi()
      .then(res => this.setState({ response: res}))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
	  let searchJobRequest={ coreSkils: this.state.skillSet

}
	 const response = await fetch('/searchJobsDetails', {
        method: 'POST',
		headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
        body: JSON.stringify(searchJobRequest)
      });
	  
	  const body = await response.json();
	
    if (response.status !== 200) throw Error(body.message);

    return body;
	  
	  
	  
  };
  
  


  
  handleSkillSetChange = (e) =>{
   this.setState({skillSet: e.target.value});
}
applyForJob = (jobId) => {
    console.log('value of id id -->', jobId);
	<Router>   
		<div>						
               <Switch>
                  
                  <Route exact path='/CandidateDetails' component={CandidateDetails} />
				
              </Switch>
			      
          </div>
         </Router>
  }

  render() {
	  const response = this.state.response.map((item, i) => (
      <tr>
        <td>{ item.jobId }</td>
		<td>{ item.coreSkils }</td>
		<td>{ item.position }</td>
		<td>{ item.location }</td>
		<td>{ item.noOfOpenings }</td>
		<td><Link className="btn btn-info" to={'/CandidateDetails'} onClick={(e)=>this.applyForJob(item.jobId, e)}>Apply</Link></td>
      </tr>
    ));
	
    return (
	
	<div className= "content-body" id="search">
                            <form > 

                                <h3> Search </h3> 
                                <p> 
                                    <label htmlFor="skillSet" className="uname" data-icon="u">Please Enter skill set to search:</label>
                                    <input id="skillSet" name="skillSet" required="required" className="form-control" type="text" placeholder="e.g. Java, React, Angular" value={this.state.skillSet} onChange={this.handleSkillSetChange}/>
                                </p>
                                                                
                                <p className="search" align="right"> 
									<input type="button" className="btn btn-success" value="Search Jobs" onClick={(e)=>this.searchJobs()}/> 
								</p>
                                
                            </form>
							
							
							
	
	
   <table className ="table">
		<thead className="thead-dark">
			<tr>
				
				<th>Job Id</th>
				<th> Core Skills</th>
				<th> Position</th>
				<th> Location</th>
				<th>No of Openings</th>
				<th>Apply</th>
			</tr>
		</thead>
		<tbody>{ response }</tbody>
	  </table>
  
  
                        </div>);
  }
}

export default SearchJobs;
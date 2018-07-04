import React, { Component } from 'react';
import './OpenJobs.css';
import CandidateDetails from '../candidate-details/CandidateDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class OpenJobs extends Component {
	

  state = {
    response: [],
	jobId: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/listJobDetails');
	
    const body = await response.json();
	
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
	
	applyForJob = (jobId) => {
		 this.setState({jobId: jobId});
		 <Router>   
		<div>						
               <Switch>
                  
                  <Route exact path='/CandidateDetails' component={CandidateDetails} />
				
              </Switch>
			      
          </div>
         </Router>
    console.log('value of id id -->', jobId);
	
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
	<div className="content-body" >
	 <h3 className="">Openings:</h3>
      <table className="table" >
	 
		<thead className="thead-dark">
			<tr>
				
				<th>Job Id</th>
				<th> Core Skills</th>
				<th> Position</th>
				<th> Location</th>
				<th> Openings</th>
				<th>Apply</th>
			</tr>
		</thead>
		<tbody>{ response }</tbody>
	  </table>
	 
	  </div>
    );
	
  }
	
  
  
}

export default OpenJobs;

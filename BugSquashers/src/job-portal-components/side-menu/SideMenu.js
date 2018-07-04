import React, { Component } from 'react';
//import logo from './logo.svg';
import './SideMenu.css';
import OpenJobs from '../open-jobs/OpenJobs';
import CandidateDetails from '../candidate-details/CandidateDetails';
import HRFeedback from '../hr-feedback/HRFeedback';
import SearchJobs from '../search-jobs/SearchJobs';
import CandidateFeedback from '../candidate-feedback/CandidateFeedback';
import ScheduleInterview from '../schedule-interview/ScheduleInterview';
import InterviewerFeedback from '../interviewer-feedback/InterviewerFeedback';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class SideMenu extends Component {
  render() {
    return (
	<div>
	  <Router>   
		<div>	
			<div className= "menu-left">
               <ul className="nav nav-tabs" >
			      <li><Link to={'/SearchJobs'}>Search Jobs</Link></li>
                  <li><Link to={'/OpenJobs'}>Open Jobs</Link></li>
				  <li><Link to={'/HRFeedback'}>Feedback</Link></li>
				  <li><Link to={'/CandidateFeedback'}>Candidate Feedback</Link></li>
				  <li><Link to={'/ScheduleInterview'}>Schedule A Interview</Link></li>
				  <li><Link to={'/InterviewerFeedback'}>Interviewer Feedback</Link></li>
				  
               </ul>
                    </div> 
<div>					
               <Switch>
                  <Route exact path='/OpenJobs' component={OpenJobs} />
                  <Route exact path='/CandidateDetails' component={CandidateDetails} />
				  <Route exact path='/HRFeedback' component={HRFeedback} />
				  <Route exact path='/CandidateFeedback' component={CandidateFeedback} />
				  <Route exact path='/ScheduleInterview' component={ScheduleInterview} />
				  <Route exact path='/SearchJobs' component={SearchJobs} />
				  <Route exact path='/InterviewerFeedback' component={InterviewerFeedback} />
              </Switch>
			   </div>    
          </div>
         </Router>
		 </div>
		 
    );
  }
}

export default SideMenu;


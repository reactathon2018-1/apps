import React, { Component } from 'react';
import './ScheduleInterview.css';

class ScheduleInterview extends Component {
  render() {
    return (<form className="content-body" action=""> 

                                <h3> Schedule A Interview </h3> 
								<p> 
								<label htmlFor="jobid" className="jobid">Select Job*</label>
								<select className="form-control">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
</p>

<p> 
								<label htmlFor="selectcandidate" className="selectcandidate">Select Candidate*</label>
								<select className="form-control">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
</p> 


                                <p> 
                                    <label htmlFor="interviewdate" className="interviewdate">Interview Date*</label>
                                    <input id="interviewdate" className="form-control" name="interviewdate" required="required" type="text" placeholder="Interview Date" />
                                </p>
								
								<p> 
                                    <label htmlFor="interviewtime" className="interviewtime">Interview Time*</label>
                                    <input id="interviewtime" className="form-control" name="interviewtime" required="required" type="text" placeholder="Interview Time" />
                                </p>
								
								<p> 
                                    <label htmlFor="interviewername" className="interviewername">Interviewer Name*</label>
                                    <input id="interviewername" className="form-control" name="interviewername" required="required" type="text" placeholder="Interviewer Name" />
                                </p>
                                


								 



                                <p align ="right">  
									<input type="submit" className="btn btn-success" value="Schedule Interview"/> 
								</p>
                                
                            </form>);
  }
}

export default ScheduleInterview;
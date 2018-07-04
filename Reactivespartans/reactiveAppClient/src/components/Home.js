import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
//import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import axios from 'axios';

import Nav from './nav'
import EventTracker from './EventTracker.js'
import CommentBox from './comments.js'


//Todo - get from service
var commentData = [
  { 
    author:"Vijitha(Recruiter)", 
    text:"I've recieved your feedback"
  },
  { 
    author:"Sevak", 
    text:"I would like to know more about the upcoming rounds" 
  }
];

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileData: []
    }
  }

  componentDidMount() {

     axios.get('http://localhost:9300/candidateInterviewDetails', {params: {'emailId' : 'sevak.singh@gmail.com'}})
    
    .then(res => {
      const profileData = res.data[0];
      this.setState({ profileData: profileData });
    })    
  }
   render() {
     const candidateInfo = this.state.profileData;
     
      return (
        <div>
            <div className="title-image jumbotron text-center">                
            </div>
            <Nav/>
            <br/>
            <br/>
            <div className="container-fluid">
              <Row>
                <Col sm={6}>
                  <Card className="profile">
                     <CardBody>
                          {/* <img className="profileImg" alt="John" /> */}
                          <div>
                            <h4><b>{candidateInfo.firstName}</b><b>{candidateInfo.lastName}</b></h4>                      
                            <p>{candidateInfo.emailId}</p> 
                            <p>{candidateInfo.Address}</p>                             
                            <p>+91 {candidateInfo.mobileNo}</p> 
                            <p>{candidateInfo.jobCode}</p> 
                            
                            <p><b>Scheduled Interview date : </b>{candidateInfo.scheduleDate} {candidateInfo.scheduleTime}</p>                             
                            <p><b>Interview Status : </b>{candidateInfo.status}</p>                            
                          </div>
                     </CardBody>
                   </Card>
                </Col>
                <Col sm={6}> 
                <Card className="comment-section">
                <CardBody>
                   <EventTracker />
                </CardBody>
                </Card>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col sm={6}> 
                <Card className="file-upload">
                <CardBody> 
                <h4><b>Upload Candidate Documents</b></h4> 
                 <div class="form-group">                 
                 <input type="file" className="btn btn-primary" id="exampleFormControlFile1" />
                 </div>
                </CardBody>
                </Card>
                </Col>
                <Col sm={6}> 
                <Card className="comment-section">
                <CardBody>
                <h4><b>Feedback</b></h4> 
                <CommentBox data={commentData}/>
                </CardBody>
                </Card>
                </Col>
              </Row>
             
            </div >
        </div>
      );
   }
}

/* function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      app: bindActionCreators(actions, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps ) (Home); */

export default Home;

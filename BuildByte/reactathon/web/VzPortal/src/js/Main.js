import React, { Component } from "react";
import SearchJobContainer from "./SearchJobContainer";
import AppliedJob from "./AppliedJob"
import ProfileUpdate from "./ProfileUpdate"
import UploadDcouments from "./UploadDcouments"
import logo from "./favicon.jpg"
import images from "./images.png"
import images1 from "./images1.jpg"
import images2 from "./images2.jpg"

import Login from "./Login";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

type Props = {
  history: any

};

class Main extends React.Component<Props> {
 
  static childContextTypes () {
    history: PropTypes.instanceOf(Object).isRequired
  };
  
  render() {
    return (
      <HashRouter>
        <div>
			<img width="300" alt="Verizon Logo" src={logo} align="right"/>
          <h1>Verizon Careers</h1>
		  <marquee behavior="alternate" direction="left" width ="100%">
		  <img width="150"  src={images} />&nbsp;&nbsp;
<img width="200"  src={images1} />&nbsp;&nbsp;
<img width="220"  src={images2} />		  </marquee>
          <ul className="header">
			<li id="123"><NavLink to="/">Login</NavLink></li>
            <li ><NavLink to="/SearchJobContainer">Job Search</NavLink></li>
            <li><NavLink to="/AppliedJob">Applied Job</NavLink></li>
            <li><NavLink to="/profile">Profile Update</NavLink></li>
			<li><NavLink to="/UploadDocuments">Upload Documents</NavLink></li>
          </ul>
         <div className="content">
			<Route exact path="/" component={Login}/>
            <Route  path="/SearchJobContainer" component={SearchJobContainer}/>
            <Route path="/AppliedJob" component={AppliedJob}/>
            <Route path="/profile" component={ProfileUpdate}/>
			<Route path="/UploadDocuments" component={UploadDcouments}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
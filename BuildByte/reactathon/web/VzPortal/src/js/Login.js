import React, { Component } from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import NavBar from './NavBar';
import CoursesList from './CoursesList';
import SearchJobContainer from './SearchJobContainer';
import Main from './Main'
import axios from 'axios';

type Props = {
  history: any

};

class Login extends React.Component<Props> {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
 
  static childContextTypes () {
    history: PropTypes.instanceOf(Object).isRequired
  };
  
  
  childContext () {
    history: this.props.history

  };
  
  getChildContext() {
    return this.childContext;
  }
  

handleClick(event){
	 var apiBaseUrl = "http://localhost:4000/api/";
	 var self = this;
	 var payload={"userName": "Ravi", "password" : "vz01#"}
	 axios.post("http://localhost:8090/reactathon/vzcareer/login", payload)
	 .then(function (response) {
		console.log(response);
	 if(response.data.code == 200){
		 console.log("Login successfull");
		 alert("Success");
	 }
	 else if(response.data.code == 204){
		 console.log("Username password do not match");
		 alert("username password do not match")
	 }
	 else{
		 console.log("Username does not exists");
		 alert("Username does not exist");
	 }
	 })
	 .catch(function (error) {
		console.log(error);
	});
	//this.context.history.push(event.currentTarget.getAttribute('href'));
 } 
render() {
	if(document && document.getElementById("123") && document.getElementById("123").firstChild){

	  var x = document.getElementById("123").firstChild;
	      
		x.setAttribute("class", "active");
	
	}
    return (
      <div>
	  
	
	 <MuiThemeProvider>
          <div>
          
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
			 <RaisedButton label="Sign Up" primary={true} style={style} onClick={(event) => this.register(event)}/>
	 
         </div>
		 </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;
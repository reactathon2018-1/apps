import React, { Component } from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NavBar from './NavBar';
import CoursesList from './CoursesList';
import GridList from 'material-ui/GridList';
import MenuItem from '@material-ui/core/MenuItem';
import SelectField from 'material-ui/SelectField';

class UploadDcouments extends Component {
constructor(props){
  super(props);
   this.state={
  jobId:'',
  keyWord:''
  }
 }
render() {
	document.getElementById("123").firstChild.removeAttribute("class");
    return (
	
      <div>

	 <MuiThemeProvider>
          <div>
    
           <TextField
             hintText="Enter FileName"
             floatingLabelText="FileName"
             onChange = {(event,newValue) => this.setState({jobId:newValue})}
             />
           <br/>
	   
            <RaisedButton label="Browse" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Upload" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default UploadDcouments;
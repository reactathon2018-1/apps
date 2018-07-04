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

class SearchJobContainer extends Component {
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
             hintText="Enter your JobID"
             floatingLabelText="JobID"
             onChange = {(event,newValue) => this.setState({jobId:newValue})}
             />
           <br/>
	   
             <SelectField 
				hintText="Enter your Location"
				floatingLabelText="Location"
				value={this.state.age}
				onChange = {(event,newValue) => this.setState({jobId:newValue})}
				inputProps={{
				  name: 'age',
				  id: 'age-simple',
				}}
			  >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Hyderabad</MenuItem>
            <MenuItem value={20}>Chennai</MenuItem>
            <MenuItem value={30}>USA</MenuItem>
          </SelectField>

             <br/>
			 <TextField
               hintText="Enter Keyword"
               floatingLabelText="Keyword"
               onChange = {(event,newValue) => this.setState({keyWord:newValue})}
               />
             <br/>
             <RaisedButton label="Search" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default SearchJobContainer;
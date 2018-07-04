import React from 'react';
import axios  from 'axios';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
//var faker = require('faker');
import faker from 'faker';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

const styles = {
  headline: {
	  display:"block",
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}


export default class TabsSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true, jid : ''};
	this.updateInterviewDetails = this.updateInterviewDetails.bind(this);
	this.updateInterviewStatus = this.updateInterviewStatus.bind(this);
	this.updateJoiningDetails = this.updateJoiningDetails.bind(this);
	
		this.contactDetails = this.contactDetails.bind(this);


  }
  
  componentDidMount(){
	  

	  
	
	 
	
    }
	  
  

  //handleToggle = () => this.setState({open: !this.state.open});
	updateInterviewDetails(){
		if(this.props && this.props.gridList && this.props.gridList.job_obj){
			var obj = this.props.gridList.job_obj.jobs;
			var url = window.location.href;
			var jid = url.substring(url.lastIndexOf('/')+1);
			if(jid){
					var curr_job;
				for(let i=0;i<obj.length;i++){
					if(obj[i]['jid'] == jid){
						curr_job = obj[i];
						break;
					}
				}
				var jDesc = curr_job.jdesc;
				var iDate = curr_job.itime;
				var iVenue = curr_job.ivenue;
				return(
				 <div>
		
					<p>
					  Hi {this.props.gridList.job_obj.name}.. Your Interview is scheduled on {iDate} at {iVenue}.
					  <br/><br/>
					  Job Description: {jDesc}
					</p>
		
			  </div>
				)
			}
		}	
	}
	
	
	updateInterviewStatus(){
		if(this.props && this.props.gridList && this.props.gridList.job_obj){
			var obj = this.props.gridList.job_obj.jobs;
			var url = window.location.href;
			var jid = url.substring(url.lastIndexOf('/')+1);
			if(jid){
					var curr_job;
				for(let i=0;i<obj.length;i++){
					if(obj[i]['jid'] == jid){
						curr_job = obj[i];
						break;
					}
				}
				var status = curr_job.result;
				var result;
				if(!status)
					result = "All the best for your Interview!!!"
				else if(status == 0)
					result = "Kindly wait for the feedback. Your application is in Progress";
				else if(status == 1)
					result = "Congrats!! You've cleared the interview. Please upload the required documents";
				else if(status == 2)
					result = "Sorry. Please try applying after six months"
				
				return(
				 <div>
				
					<p>
						{result}
					</p>
				
				</div>
				)
			}
		}	
	}
	
	updateJoiningDetails(){
		if(this.props && this.props.gridList && this.props.gridList.job_obj){
			var obj = this.props.gridList.job_obj.jobs;
			var obj1 = this.props.gridList.job_obj;
			var url = window.location.href;
			var jid = url.substring(url.lastIndexOf('/')+1);
			
			var job_obj;
			var job_doj;
			var job_contact_no;
			var job_contact_name;
			
			if(jid){
				
				var url = "http://127.0.0.1:4000/joiningDetails";
				var headers = {};
				headers.cid = obj1.cid;
				headers.jid = jid;
				var self = this;
				axios({
					url: url,
					method: 'get',
					headers: headers
				})
				.then(response => {
					console.log('response: ',response);
					if(response && response.data){
						 job_obj = response.data;
						 job_doj = job_obj.doj;
						 job_contact_no = job_obj.contact.number;
						 job_contact_name = job_obj.contact.name;
					}
					else{
						console.log('else case:');
					}
				})
				.catch(err => {
					console.log('error: ',err);
				});
				
					var curr_job;
					for(let i=0;i<obj.length;i++){
						if(obj[i]['jid'] == jid){
							curr_job = obj[i];
							break;
						}
					}
				var iDate = curr_job.itime;
				var iVenue = curr_job.ivenue;
				return(
				 <div>
		
					<p>
					  Hi {this.props.gridList.job_obj.name}..<br/>
					  Your Joining Details:
					  <br/>
					  Joining venue: {iVenue}
					  <br/>
					  Date of joining: {job_doj}
					  <br/>
					  HR Point of Contact:
					  <br/>
					  Name: {job_contact_name}
					  <br/>
					  Mobile number: {job_contact_no}
					</p>
		
			  </div>
				);
			}
		}	
	}
	
	
	contactDetails(){
	return (
	<div>
        <List>
    <ListItem
      disabled={true}
      leftAvatar={
	  <Avatar src={faker.image.avatar()} />
      }
    >
	{faker.name.findName()}, HRBP.
    </ListItem>
	<ListItem
      disabled={true}
      leftAvatar={
        <Avatar src={faker.image.avatar()} />
      }
    >
      {faker.name.findName()}, HR Manager.
    </ListItem>
	<ListItem
      disabled={true}
      leftAvatar={
        <Avatar src={faker.image.avatar()} />
      }
    >
      {faker.name.findName()}, HR Partner.
    </ListItem>
	<ListItem
      disabled={true}
      leftAvatar={
        <Avatar src={faker.image.avatar()} />
      }
    >
      {faker.name.findName()}, HR Lead.
    </ListItem>
	<ListItem
      disabled={true}
      leftAvatar={
        <Avatar src={faker.image.avatar()} />
      }
    >
      {faker.name.findName()}, HRBP.
    </ListItem>
	</List>
      </div>
	
	);
		
	}
	
	
  render() {
    return (

	<MuiThemeProvider muiTheme={getMuiTheme()}>
      <div id="tab_body">
        <Tabs>
    <Tab label="Interview details" >
	{this.updateInterviewDetails()}
    </Tab>
    <Tab label="Interview Status" >
	{this.updateInterviewStatus()}
    </Tab>
	 <Tab label="Upload document" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
	 <Tab label="Joining details" >
      {this.updateJoiningDetails()}
    </Tab>
	 <Tab label="Contact HR" >
      {this.contactDetails()}
    </Tab>
    <Tab
      label="FAQs"
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
      </div>
	  </MuiThemeProvider>
	
    );
  }
}

//export default TabsSimple;
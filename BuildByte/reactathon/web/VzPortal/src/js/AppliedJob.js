import React, { Component } from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DataTables from 'material-ui-datatables';

const TABLE_COLUMNS = [
  {
    key: 'JobId',
    label: 'JobId',
  }, {
    key: 'Description',
    label: 'Description',
  },
  {
    key: 'Date',
    label: 'Date',
  },
  {
    key: 'Status',
    label: 'Status',
  },
  {
    key: 'Comments',
    label: 'Comments',
  },
  
];
 
const TABLE_DATA = [
  {
    JobId: '103',
    Description: 'J2EE Developer',
    Date: '10/12/2017',
    Status: 'Open',
	Comments: 'Required ReactJS Skills'
    
  },{
    JobId: '104',
    Description: 'Software Engineer',
    Date: '10/06/2017',
    Status: 'Open',
	Comments: 'Required Java Skills'
    
  },
  {
    JobId: '105',
    Description: 'Technical Lead',
    Date: '10/04/2017',
    Status: 'Closed',
	Comments: 'Required ReactJS and Java Skills'
    
  },
  {
    JobId: '106',
    Description: 'Analyst',
    Date: '10/09/2017',
    Status: 'Open',
	Comments: 'Required ReactJS, NodeJS Skills'
    
  }
  
];
class AppliedJob extends Component {

constructor(props){
	var id =0;
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
		<DataTables
        height={'auto'}
        selectable={false}
        showRowHover={true}
        columns={TABLE_COLUMNS}
        data={TABLE_DATA}
        showCheckboxes={false}
        onCellClick={this.handleCellClick}
        onCellDoubleClick={this.handleCellDoubleClick}
        onFilterValueChange={this.handleFilterValueChange}
        onSortOrderChange={this.handleSortOrderChange}
        page={1}
        count={100}
      />	 		  
            
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default AppliedJob;
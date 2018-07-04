import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class DrawerSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  //handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Drawer open={this.state.open}>
          <MenuItem>Interview details</MenuItem>
          <MenuItem>Interview Status</MenuItem>
		  <MenuItem>Upload document</MenuItem>
          <MenuItem>Joining details</MenuItem>
		  <MenuItem>Contact HR</MenuItem>
          <MenuItem>FAQs</MenuItem>
        </Drawer>
      </div>
	  </MuiThemeProvider>
    );
  }
}
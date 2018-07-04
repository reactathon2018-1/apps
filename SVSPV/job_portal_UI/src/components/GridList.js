import React, { Component } from 'react';
import {Link} from 'react-router';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';
import Divider from '@material-ui/core/Divider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/* TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
}; */

class TitlebarGridList extends Component {
	
	constructor(props){
		super(props);
	}
	
	render(){
	  //const { classes } = this.props;
	  console.log("props: ",this.props);
	  var tileData = this.props.tileData;
	  if(this.props){
		  return (
			<div style={styles.root}>
			  <GridList cellHeight={180} style={styles.gridList}>
				<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
				  <ListSubheader component="div">Welcome {this.props.gridList.job_obj.name}</ListSubheader>
				</GridListTile>
				{tileData.map(tile => (
				<Link to ={`/view/${tile.jid}`}>
				  <GridListTile key={tile.img}>
					<img src={tile.img} alt={tile.title} />
					<GridListTileBar
					  title={tile.title}
					  subtitle={<span>{tile.status}</span>}
					
					/>
				  </GridListTile>
				 </Link>
				))}
			  </GridList>
			</div>
		  );
	  }
	  else{
		return(
			<div>
			</div>
		)
	  }
	}
}

class JobGrid extends Component{
	constructor(props){
		super(props);
		this.formTileData = this.formTileData.bind(this);
		this.tileData = [];
	}
	
	formTileData(){
		var tileData = this.tileData;
		if(this.props && this.props.gridList && this.props.gridList.job_obj){
			var jobs = this.props.gridList.job_obj.jobs;
			if(jobs){
				for(let i=0;i<jobs.length;i++){
					tileData[i] = {};
					tileData[i].title = jobs[i].jrole;
					tileData[i].jid = jobs[i].jid;
					if(jobs[i].status == 0)
						tileData[i].status = "Upcoming";
					else if(jobs[i].status == 1)
						tileData[i].status = "Attended";
					else if(jobs[i].status == 2)
						tileData[i].status = "Missed";
				}
			}
		}
		console.log('jobs: ',tileData);
	}
	
	render(){
		if(this.props && this.props.gridList && this.props.gridList.isLoginSuccess){
			{this.formTileData()}
			console.log('rendering grid');
			
			return(
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div>
					<TitlebarGridList {...this.props} tileData = {this.tileData}/>
				</div>
			</MuiThemeProvider>
			)
		}
		else{
			return(
				<div>
				</div>
			)
		}
	}
}

export default JobGrid;







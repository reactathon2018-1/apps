import React, { Component } from 'react';
import '../App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios  from 'axios';
import JobGrid from './GridList';
import DrawerSimple from './Drawer';
import TabsSimple from './Tabs';

import DatePicker from 'material-ui/DatePicker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Modal extends Component {

    constructor(props){
        super(props);
        this.state = {
            cid:'',
            dob:''
        };
    }

    render() { //<input id="username" required type="text" placeholder="28-06-1995" onBlur={this.props.updateDOB} />
        return (
            <div className="Modal">
                <form id="entry_form" onSubmit={this.props.onSubmit} className="ModalForm">
                    <div className="Input">
                        <input id="name" required type="text"  placeholder="Candidate ID" onBlur={this.props.updateCID}/>
                    </div>
                    <div id="username" className="Input">
                        <DatePicker hintText="Date of Birth" textFieldStyle = {{color : 'blue'}} hintStyle = {{color : 'grey'}} style = {{width : '200px', fontColor: 'blue'}} onBlur={this.props.updateDOB}/>
                    </div>
                    <button>Proceed</button>
                </form>
            </div>
        );
    }
};

class Entry extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: this.props.entry.mounted,
            cid:'',
            dob:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCID = this.updateCID.bind(this);
        this.updateDOB = this.updateDOB.bind(this);
    }

    componentDidMount()
    {
        this.setState({ mounted: true });
    }

    updateCID(e){
        console.log('updating cid');
        this.setState({cid:e.target.value})
    }

    updateDOB(e){
        console.log('updating cid');
        this.setState({dob:e.target.value})
    }

    handleSubmit(e) {//todo call the api and re render based on the response
        console.log('Entry:: handleSubmit called',e);
        console.log('refs:',e.target.currentTarget);
        e.preventDefault();
        var url = "http://127.0.0.1:4000/login";
        var headers = {};
        headers.cid = this.state.cid;
        headers.dob = this.state.dob;
		var self = this;
        axios({
            url: url,
            method: 'get',
            headers: headers
        })
            .then(response => {
                console.log('response: ',response);
                if(response && response.data){
                    this.setState({ mounted: false });
					//this.props.a_entry_success(this.state.cid);
					var job_obj = response.data;
					self.props.a_entry_success(self.state.cid,job_obj);
                }
                else{
			
					//self.props.a_entry_success(self.state.cid);
					document.getElementById("entry_form").reset();
                }
            })
            .catch(err => {
			
				//self.props.a_entry_success(self.state.cid);
                console.log('error: ',err);
				document.getElementById("entry_form").reset();
            });
    }

    renderBackground(){ //todo render on image onload
        return(
            <div className = "App_bg"></div>
        )
    }

    getData(){

    }

    render() {

        var child;
        if(this.state.mounted && this.props && this.props.entry && !this.props.entry.isLoginSuccess) {
            child = (<Modal onSubmit={this.handleSubmit} updateCID={this.updateCID} updateDOB={this.updateDOB}/>);
        }
{this.renderBackground()}
        return(
		<MuiThemeProvider muiTheme={getMuiTheme()}>
            <div ref="app_entry">
               
                <div className="App">
                    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {child}
                    </ReactCSSTransitionGroup>
                </div>
				<div>
					<JobGrid {...this.props}>
					</JobGrid>
			
				</div>
            </div>
		</MuiThemeProvider>	
        );
    }
};


export default Entry;

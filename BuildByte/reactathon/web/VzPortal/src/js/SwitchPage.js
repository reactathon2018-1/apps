import React, { Component } from "react";
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import {
  HashRouter, Switch
} from "react-router-dom";
import {BrowserRouter} from 'react-router';
import Main from "./Main";
import Login from "./Login";

type Props = {
  history: any

};

class SwitchPage extends React.Component<Props> {
	  static childContextTypes () {
    history: PropTypes.instanceOf(Object).isRequired
  };
  
  
 getChildContext() {
    return this.childContext;
  }
 
  
   render() {
    return (
    
	  <Router history={this.props.history}>
	  <Switch>
		<Route exact path='/' component={Login}/>
           
          <Route path='/Main' component={Main}/>
		
          </Switch>
        </Router>
    );
  }
}
 
export default SwitchPage;


 
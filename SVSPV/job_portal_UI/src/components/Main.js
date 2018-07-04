import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actions';
import Entry from './Entry'
import App from './App'
import React,{Component} from 'react';

function mapStateToProps(state){
    return{
        entry: state.entry_reducer,
		gridList: state.gridList_reducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}

const Main = connect(mapStateToProps,mapDispatchToProps)(App)

export default Main;
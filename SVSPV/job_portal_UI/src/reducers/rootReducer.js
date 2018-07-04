import {combineReducers} from  'redux';
import {routerReducer} from 'react-router-redux';
import r_entry_reducer from './entry_reducer';
import r_gridList_reducer from './gridList_reducer';


const rootReducer = combineReducers({ //include all reducers here
    routing:routerReducer,
    entry_reducer : r_entry_reducer,
	gridList_reducer : r_gridList_reducer
});

export default rootReducer;
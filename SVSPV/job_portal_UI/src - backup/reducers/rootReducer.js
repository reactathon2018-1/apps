import {combineReducers} from  'redux';
import {routerReducer} from 'react-router-redux';
import r_entry_reducer from './entry_reducer';


const rootReducer = combineReducers({ //include all reducers here
    routing:routerReducer,
    entry_reducer : r_entry_reducer
});

export default rootReducer;
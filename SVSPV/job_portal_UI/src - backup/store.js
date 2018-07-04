import {createStore,compose} from 'redux'
import {Router,Route,Link,IndexRoute,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import rootReducer from './reducers/rootReducer'

const defaultState = {};

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(browserHistory,store);
export default store;
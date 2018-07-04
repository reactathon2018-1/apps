import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Entry from './components/Entry';
import Main from './components/Main';
import TabsSimple from './components/Tabs';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,Link,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store,{history} from './store';

const router = (
  <Provider store = {store}>
    <Router history = {history}>
        <Route path="/" component={Main}> //title
            <IndexRoute component={Entry}></IndexRoute>
			<Route path="/view/:jid" component={TabsSimple}></Route>
        </Route>
    </Router>
  </Provider>
);

//ReactDOM.render(<Entry />, document.getElementById('root'));
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();

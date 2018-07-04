import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../helpers';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { HomePage } from './HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/index" component={HomePage} />
                </div>
            </Router>
        );
    }
}

export default App;
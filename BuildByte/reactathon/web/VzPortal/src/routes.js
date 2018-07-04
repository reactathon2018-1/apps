import React, { Component } from "react";
import { Route, IndexRoute } from 'react-router';
import Main from "./js/Main";
import Login from "./js/Login";
import HashRouter from "react-router-dom";

export default(
<HashRouter>
<Route exact path='/' component={Login}/>
<Route  path="main" component={Main}
</HashRouter>

);
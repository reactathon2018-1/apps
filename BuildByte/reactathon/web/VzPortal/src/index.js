import React from "react";
import ReactDOM from "react-dom";
import createHistory from 'history/createBrowserHistory';
import Style from "./Search.css" 
import PropTypes from "prop-types";
import Main from "./js/Main";

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Main history={createHistory()} />, wrapper) : false;



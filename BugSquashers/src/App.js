import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

import SideMenu from './job-portal-components/side-menu/SideMenu';

class App extends Component {
  render() {
    return (
      <div className="App" className="container">
        <header className="App-header">
          <img src={logo} />
         
        </header>
       
	   
         <SideMenu></SideMenu>
      </div>
    );
  }
}

export default App;


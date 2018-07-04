import React, { Component } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Content from '../components/Content';
import "../../assets/css/_all-skins.min.css";
import "../../assets/css/AdminLTE.css";

class Menu extends Component {

  render() {
    return (
      <div>
        <Header />
        <SideBar />
      </div>
    );
  }
}

export default Menu;

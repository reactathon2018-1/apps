
import React, { Component } from 'react';

class Nav extends Component {
   render() {
      return (
            <nav className="navbar navbar-expand-sm navbar-dark bkcolor">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Dashboard</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/Login">Login</a>
                        </li> */}
                        </ul>
                    </div>  
            </nav>
      );
   }
}

export default Nav;

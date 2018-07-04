import React, {Component} from 'react';
import "../../assets/css/_all-skins.min.css";
import "../../assets/css/AdminLTE.css";
import logo from '../../assets/images/vzlogo.png';
import { Link } from 'react-router-dom';
import MdExitToApp from 'react-icons/lib/md/exit-to-app'
export default class Header extends Component {
    render(){
        let user = JSON.parse(localStorage.getItem('user'));
        return (
            <header className="main-header">
                <a href="#" className="logo" style={{background:"#222d32"}}>
                <img src={logo} style={{width:"150px"}}/>
                </a>
                <nav className="navbar navbar-static-top" style={{background:"#222d32"}}>
                <span className="col-md-3 col-md-offset-5" style={{color:"white",fontSize:"22px",paddingTop:"8px"}}>Candidate Portal</span>
                    <div className="navbar-custom-menu pull-right">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-user"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">{user.username}</li>
                                    <li>
                                    <Link to="/login">
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left" style={{fontSize:"23px"}}>
                                                        <MdExitToApp />
                                                    </div>
                                                    <p style={{fontSize:"20px"}}>
                                                Logout
                                            </p>
                                                </a>
                                            </li>
                                        </ul>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                </nav>
            </header>
        )
    }
}
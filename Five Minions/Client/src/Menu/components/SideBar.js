import React, { Component } from 'react';
import "../../assets/css/_all-skins.min.css";
import "../../assets/css/AdminLTE.css";
import MdAccountCircle from 'react-icons/lib/md/account-circle'
export default class SideBar extends Component {


    render() {

        let user = JSON.parse(localStorage.getItem('user'));
        return (
            <aside className="main-sidebar" style={{ minHeight: "974px" }}>
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                           <MdAccountCircle style={{background:'#fff'}}/>
                        </div>
                        <div className="pull-left info">
                            <p>{user.username}</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li>
                            <a href="/jobsApplied">
                                <i className="fa fa-user-plus"></i> <span>Jobs Applied</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/feedback">
                                <i className="fa fa-edit"></i> <span>Feedback</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/contactus">
                                <i className="fa fa-envelope"></i> <span>Contact Us</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/aboutus">
                                <i className="fa fa-building-o"></i> <span>About Us</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}

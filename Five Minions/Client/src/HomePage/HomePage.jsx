import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap'

import { userActions } from '../_actions';
import Menu from '../Menu/container/Menu'
import "../assets/css/_all-skins.min.css";
import "../assets/css/AdminLTE.css";

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.check = this.check.bind(this);

        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        alert(`selected ${key}`);
        this.setState({ key });
    }
    check() {
        console.log("A");
    }
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <Menu></Menu>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
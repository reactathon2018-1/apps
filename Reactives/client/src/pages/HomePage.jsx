import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import { Dashboard } from '../components';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { user } = this.props;
        return (
            <div className="fixed-nav sticky-footer bg-dark">
                <NavigationBar firstName={user.first_name} badgeId={user.badge_id}/>
                <Dashboard userType={user.user_type}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state in homepage : '+JSON.stringify(state));
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

       console.log("props :: " + JSON.stringify(props));
        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            emailid: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { emailid, password } = this.state;
        const { dispatch } = this.props;
        if (emailid && password) {
            dispatch(userActions.login(emailid, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { emailid, password, submitted } = this.state;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                        <div className="card-body">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="emailid">Email Address</label>
                                    <input type="text" placeholder="Enter Email Adress" className={'form-control' + (submitted && !emailid ? ' is-invalid' : '')} name="emailid" value={emailid} onChange={this.handleChange} />
                                    {submitted && !emailid &&
                                        <div className="text-danger">Email Address is required</div>
                                    }
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" placeholder="Enter Password" className={'form-control' + (submitted && !password ? ' is-invalid' : '')} name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="text-danger">Password is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">Login</button>
                                    {loggingIn &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                <div className="text-center">
                                    <Link to="/register" className="btn btn-link">Register</Link>
                                </div>
                             </form>
                        </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state in login : '+JSON.stringify(state));
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
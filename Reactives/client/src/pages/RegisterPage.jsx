import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                password: '',
                emailid : ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.password && user.emailid) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        
        return(
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" placeholder="Enter FirstName" className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} name="firstName" value={user.firstName} onChange={this.handleChange} />
                                {submitted && !user.firstName &&
                                    <div className="text-danger">First Name is required</div>
                                }
                            </div>
                            <div className='form-group'>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" placeholder="Enter LastName" className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} name="lastName" value={user.lastName} onChange={this.handleChange} />
                                {submitted && !user.lastName &&
                                    <div className="text-danger">Last Name is required</div>
                                }
                            </div>
                            <div className='form-group'>
                                <label htmlFor="emailid">Email Address</label>
                                <input type="text" placeholder="Enter Email Adress" className={'form-control' + (submitted && !user.emailid ? ' is-invalid' : '')} name="emailid" value={user.emailid} onChange={this.handleChange} />
                                {submitted && !user.emailid &&
                                    <div className="text-danger">Email Address is required</div>
                                }
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Enter Password" className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} name="password" value={user.password} onChange={this.handleChange} />
                                {submitted && !user.password &&
                                    <div className="text-danger">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Register</button>
                                {registering && 
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                             </div>
                            <div className="text-center">
                                <Link to="/" className="btn btn-link">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
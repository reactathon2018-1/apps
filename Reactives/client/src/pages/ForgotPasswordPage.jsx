import React from 'react';
import { Link } from 'react-router-dom';


class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailid: '',
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
        const { emailid } = this.state;
    }

    render() {
        const { emailid, submitted } = this.state;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Reset Password</div>
                        <div className="card-body">
                            <div className="text-center mt-4 mb-5">
                                <h4>Forgot your password?</h4>
                                <p>Enter your email address and we will send you instructions on how to reset your password.</p>
                            </div>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="emailid">Email Address</label>
                                    <input type="email" placeholder="Enter Email Address" className={'form-control' + (submitted && !emailid ? ' is-invalid' : '')} name="emailid" value={emailid} onChange={this.handleChange} />
                                    {submitted && !emailid &&
                                        <div className="text-danger">Email Address is required</div>
                                    }
                                </div>
                                 <div className="form-group">
                                    <button className="btn btn-primary btn-block">Reset Password</button>
                                </div>
                                <div className="text-center">
                                    <Link to="/" className="btn btn-link">Login</Link>
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

export default ForgotPasswordPage; 
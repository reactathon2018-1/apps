import React from 'react';
import Menu from '../Menu/container/Menu'
import "../assets/css/_all-skins.min.css";
import "../assets/css/AdminLTE.css";
import { sendEmail } from '../_actions/contactus.actions';
import { connect } from 'react-redux';
import { upLoadDocument, fetchJobsApplied } from '../_actions/jobsapplied.actions';

class ContactUs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fromId: "",
            toId: '',
            subject: "",
            body: '',
            SuccessMessage:""
        };
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.props.fetchJobsApplied(user);

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    onHandleToChange(e) {
        this.setState({ toId: e.target.value })
    }

    onHandleSubjectChange(e) {
        this.setState({ subject: e.target.value })
    }

    onHandleCCChange(e) {
        this.setState({ cc: e.target.value })
    }

    onHandleBodyChange(e) {
        this.setState({ body: e.target.value })
    }

    handleSubmit() {

        const data = {
            toId: this.state.toId,
            subject: this.state.subject,
            body: this.state.body
        }
        console.log("Data submitted", data)
        this.props.sendEmail(data);
        this.setState({ body: "", subject: "" })
        this.setState({ SuccessMessage: 'Email sent successfully' }, () => window.setTimeout(() => this.setState({ SuccessMessage: null }), 5000))
    }
    render() {
        const { rating } = this.state;
        console.log("jobsssass", this.props.jobs)
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <Menu></Menu>
                <div className="content-wrapper">
                    <section className="content-header">
                        {this.props.contactUsError ? <div class="alert alert-error" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button><h2>{this.props.contactUsError.type} </h2><h4>{this.props.contactUsError.Message} </h4></div> : ""}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Contact Us</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                            {this.state.SuccessMessage && <div className='alert alert-success' style={{ width: '100%' }}>{this.state.SuccessMessage}</div>}
                                                <div className="container well well-sm" style={{ padding: "5px", fontSize: "16px", lineHeight: "2em" }}>
                                                    <div className="col-md-12 row" style={{ padding: "5px" }}>
                                                        <div className=" col-md-3" style={{ textAlign: "right" }}>To:</div>
                                                        <div className=" col-md-6">
                                                            <select className="form-control" value={this.state.toId} onChange={this.onHandleToChange.bind(this)}>

                                                                {this.props.jobs && this.props.jobs.data.details && this.props.jobs.data.details.jobInfo.map(function (job) {

                                                                    return (

                                                                        <option>{job.hiringManager}</option>

                                                                    )


                                                                })}

                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 row" style={{ padding: "5px" }}>
                                                        <div className=" col-md-3" style={{ textAlign: "right" }}>Subject:</div>
                                                        <div className=" col-md-6">
                                                            <input type="text" className="form-control" value={this.state.subject} onChange={this.onHandleSubjectChange.bind(this)}></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 row" style={{ padding: "5px" }}>
                                                        <div className=" col-md-3" style={{ textAlign: "right" }}>Mail Content:</div>
                                                        <div className="col-md-6"><textarea className="form-control" placeholder="Mail Content goes here" value={this.state.body} onChange={this.onHandleBodyChange.bind(this)}></textarea></div>

                                                    </div>
                                                    <div className="col-md-12" style={{ padding: "5px", float: "left" }}>
                                                        <button className="btn btn-primary col-md-2 pull-right" onClick={this.handleSubmit.bind(this)}>Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <div className="row">
                                            <div className="col-sm-3 col-xs-6">
                                                <div className="description-block border-right">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



            </div>
        );
    }

}

function mapStateToProps(state) {
    const { contactUs, contactUsError } = state.contactUsReducer;
    const { docUpload, jobs, jobsError, docUploadError } = state.jobsAppliedReducer
    return {
        contactUs,
        contactUsError,
        jobs
    };
}

export default connect(mapStateToProps, { sendEmail, fetchJobsApplied })(ContactUs);
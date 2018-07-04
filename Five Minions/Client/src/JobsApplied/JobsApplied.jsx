import React from 'react';
import * as bootstrap from 'react-bootstrap';
import ShowTimeline from '../Timeline/ShowTimeline'
import Menu from '../Menu/container/Menu'
import "../assets/css/_all-skins.min.css";
import "../assets/css/AdminLTE.css";
import { upLoadDocument, fetchJobsApplied } from '../_actions/jobsapplied.actions';
import { connect } from 'react-redux';
import axios from 'axios';

const products = [];

const jobsAppliedObj = {
  jobs: [{
    jobID: "1",
    Designation: 'Band 4',
    SkillSet: 'java , Spring boot',
    Location: 'OTP- Chennai'
  },
  {
    jobID: "2",
    Designation: 'Band 5',
    SkillSet: 'javaScript , React',
    Location: 'OTP- Chennai'
  }]
}

class JobsApplied extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'));
    this.props.fetchJobsApplied(user);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  handleDocUpload() {
    const data = {
      doc: ""
    }
    console.log("Data submitted", data)
    this.props.upLoadDocument(data);
  }

  render() {
    console.log("this.props.jobs", this.props.jobs)
    return (
      <div className="hold-transition skin-blue sidebar-mini">
        <Menu></Menu>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="row">
              <div className="col-md-12">
                {this.props.jobsError ? <div class="alert alert-error" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button><h2>{this.props.jobsError.type} </h2><h4>{this.props.jobsError.Message} </h4></div> :
                  <div className="box">
                    <div className="box-header with-border">
                      <h3 className="box-title">Jobs Applied</h3>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-12">

                          <div style={{ marginLeft: "1%" }}>
                            <div className="col-md-12 row" style={{ height: "50px", border: "1px solid #ccc", background: "#222d32", color: "white", borderRadius: "3px", marginBottom: "11px" }}>
                              <h4>
                                <div className="col-md-3">JobId</div>
                                <div className="col-md-3">Designation</div>
                                <div className="col-md-3">Skills</div>
                                <div className="col-md-3">Location</div>
                              </h4>
                            </div>
                            <ul className="row col-md-12" style={{ padding: 0, listStyle: "none" }}>
                              <bootstrap.PanelGroup
                                accordion id="jobList"
                              >
                                {this.props.jobs && this.props.jobs.data.details && this.props.jobs.data.details.jobInfo.map(function (job) {
                                  return (
                                    <li key={job.jobId}>
                                      <div>
                                        <UXComp job={job}></UXComp>
                                      </div>
                                    </li>
                                  )
                                })}
                              </bootstrap.PanelGroup>
                              {this.props.jobs && !this.props.jobs.data.details ? <div>No Jobs Applied </div> : ''}


                            </ul>
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
                  </div>}
              </div>
            </div>
          </section>
        </div>}
      </div>
    );
  }
}


class UXComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: ''
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey: this.props.jobId });
  }
  render() {

    console.log('fgfdgghgfhgfhgfhgfhgfhgfh', this.props.job.progressDetails)
    return (
      <div>

        <bootstrap.Panel eventKey={this.props.job.jobId}>
          <bootstrap.Panel.Heading style={{ minHeight: "50px" }}>
            <bootstrap.Panel.Title toggle>
              <div className="col-md-3">{this.props.job.jobId}</div>
              <div className="col-md-3">{this.props.job.designation}</div>
              <div className="col-md-3">{this.props.job.skill}</div>
              <div className="col-md-3">{this.props.job.location}</div>
            </bootstrap.Panel.Title>
          </bootstrap.Panel.Heading>
          <bootstrap.Panel.Body collapsible><ShowTimeline details={this.props.job.progressDetails} /></bootstrap.Panel.Body>
        </bootstrap.Panel>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { docUpload, jobs, jobsError, docUploadError } = state.jobsAppliedReducer;
  return {
    docUpload,
    jobs,
    jobsError,
    docUploadError
  };
}

export default connect(mapStateToProps, { upLoadDocument, fetchJobsApplied })(JobsApplied);
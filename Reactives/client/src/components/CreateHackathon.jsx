import React from 'react';

class CreateHackathon extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        hackName: '',
        hackDesc: '',
        hackStart: '',
        hackEnd: '',
        submitted: false
    };
  }

  handleSubmit(e) {
      e.preventDefault();
      this.setState({ submitted: true });
      const { hackName, hackDesc,hackStart,hackEnd } = this.state;
      if(hackName && hackDesc && hackStart && hackEnd){
          this.props.backHandler();
      }
    console.log('submit action');
  }

  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  render(){
    const { hackName, hackDesc, hackStart,hackEnd, submitted } = this.state;
    return(
      <div className="container">
      <div className="row col-md-12 col-xs-12 col-sm-12">
                <p>
                    <button type="button"className="btn btn-danger btn-lg" onClick={() => this.props.backHandler()}>
                        <span className="glyphicon glyphicon-arrow-left"></span> Back
                    </button>
                </p>
            </div>
          <div className="card card-login mx-auto mt-5">
              <div className="card-header">Create Hackathon</div>
                  <div className="card-body">
                      <form name="form" onSubmit={this.handleSubmit}>
                          <div className='form-group'>
                              <label htmlFor="hackName">Name</label>
                              <input type="text" placeholder="Enter Hackathon Name" className={'form-control' + (submitted && !hackName ? ' is-invalid' : '')} name="hackName" value={hackName} onChange={this.handleChange} />
                              {submitted && !hackName &&
                                  <div className="text-danger">Hackathon name is required</div>
                              }
                          </div>
                          <div className='form-group'>
                              <label htmlFor="hackdesc">Description</label>
                              <textarea type="text" placeholder="Enter Description" className={'form-control' + (submitted && !hackDesc ? ' is-invalid' : '')} name="hackDesc" value={hackDesc} onChange={this.handleChange} />
                              {submitted && !hackDesc &&
                                  <div className="text-danger">Description is required</div>
                              }
                          </div>
                          <div className='form-group'>
                              <label htmlFor="hackStart">Start Date</label>
                              <input type="date" placeholder="Enter Hackathon Start Date" className={'form-control' + (submitted && !hackStart ? ' is-invalid' : '')} name="hackStart" value={hackStart} onChange={this.handleChange} />
                              {submitted && !hackStart &&
                                  <div className="text-danger">Hackathon name is required</div>
                              }
                          </div>
                          <div className='form-group'>
                              <label htmlFor="hackEnd">End Date</label>
                              <input type="date" placeholder="Enter Hackathon End Date" className={'form-control' + (submitted && !hackEnd ? ' is-invalid' : '')} name="hackEnd" value={hackEnd} onChange={this.handleChange} />
                              {submitted && !hackEnd &&
                                  <div className="text-danger">Hackathon name is required</div>
                              }
                          </div>
                          <div className="form-group">
                              <button className="btn btn-primary btn-block">Create</button>
                          </div>

                       </form>
                  </div>
          </div>
      </div>
    )
  }
}

export default CreateHackathon;

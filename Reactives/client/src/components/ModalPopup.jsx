import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
        user: {
            firstName: '',
            lastName: '',
            TeamorIndv: '',
            emailid : '',
            teamName:'',
            participitants:''
        },
        submitted: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
    if (user.firstName && user.lastName && user.TeamorIndv && user.emailid && user.participitants) {
        //dispatch(userActions.register(user));
    }
}

handleRadio(event){
      console.log("event "+event.target.id);
      if(event.target.id == 'team'){
          document.getElementById("parties").style.display = "block";
      }
      else{
          document.getElementById("parties").style.display = "none";
      }

}



render() {
    const { hackers  } = this.props;
    const { user, submitted } = this.state;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Compete</ModalHeader>
          <ModalBody>
              <div className="container">
                  <div className="card card-login mx-auto mt-5">
                      <div className="card-header">Participation</div>
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
                                  <label htmlFor="TeamorIndv">Team / Individual</label><br/>
                                  <label className="radio-modal">
                                      <input type="radio" name="Ind" id="indiv" value="1" checked='true' onClick={this.handleRadio}/>
                                      <span>&nbsp;Individual</span>
                                  </label>
                                  <label className="radio-modal">
                                      <input type="radio" name="Ind" id="team" value="2" onClick={this.handleRadio}/>
                                      <span>&nbsp;Team</span>
                                  </label>
                              </div>
                              <div className='form-group'>
                                  <label htmlFor="teamName">Team Name</label>
                                  <input type="text" placeholder="Enter Team Name" className={'form-control' + (submitted && !user.teamName ? ' is-invalid' : '')} name="teamName" value={user.teamName} onChange={this.handleChange} />
                                  {submitted && !user.lastName &&
                                  <div className="text-danger">Team Name is required</div>
                                  }
                              </div>
                              <div className='form-group' id='parties' style={{display:"none"}}>
                                  <label htmlFor="participitants">Number Of Participants</label><br/>
                                  <label class="radio-modal">
                                      <input type="radio" name="participitants" value="1"/>
                                      <span>&nbsp;1</span>
                                  </label>
                                  <label class="radio-modal">
                                      <input type="radio" name="participitants" value="2"/>
                                      <span>&nbsp;2</span>
                                  </label>
                                  <label class="radio-modal">
                                      <input type="radio" name="participitants" value="3"/>
                                      <span>&nbsp;3</span>
                                  </label>
                                  <label class="radio-modal">
                                      <input type="radio" name="participitants" value="4"/>
                                      <span>&nbsp;4</span>
                                  </label>
                                  <label class="radio-modal">
                                      <input type="radio" name="participitants" value="5"/>
                                      <span>&nbsp;5</span>
                                  </label>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalPopup;
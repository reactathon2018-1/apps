import React from 'react';
import Footer from './Footer';
import DashboardDetail from './DashboardDetail';
import HackathonCards from './HackathonCards';
import ScrollToTop from './ScrollToTop';
import CreateHackathon from './CreateHackathon';
import { connect } from 'react-redux';
import { hackathonsActions } from '../actions';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dboard:true,hcreate:false};
        this.curHackathonName='';
        this.curHackathonDesc='';
    }

    handleBackFromCH(){
        console.log('hcreate state change to false');
        this.setState({hcreate:false})
    }

    handleBackFromDD(){
        console.log('dboard state change to true');
        this.setState({dboard:true})
    }

    handleHackClick(name,description){
        this.curHackathonName=name;
        this.curHackathonDesc=description;
        this.setState({dboard:false})
    }
    componentDidMount() {
        this.props.dispatch(hackathonsActions.getAllHackathons());
    }

    onCreateHack(){
      this.setState({hcreate:true})
    }

    render() {
        console.log('dbaord : '+this.state.dboard);
        const isDboard = this.state.dboard;
        const isHcreate = this.state.hcreate;
        console.log('dboard : '+isDboard);
        const { items } = this.props;
        console.log("items  :: " + JSON.stringify(this.props.items));
        var hackdemo = {"hackathons":{"hacks":[{"name":"reactathon","description":"Hackathon using react"},{"name":"speedathon","description":"Speed matters"}]}}
        this.handleBackFromDD = this.handleBackFromDD.bind(this);
        this.handleHackClick = this.handleHackClick.bind(this);
        this.handleBackFromCH = this.handleBackFromCH.bind(this);
        this.onCreateHack = this.onCreateHack.bind(this);
        return (
            <div className="content-wrapper" style={{marginTop : '80px'}}>
            <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Hackathons</li>
                </ol>
                {isHcreate ? (<CreateHackathon backHandler={this.handleBackFromCH}/>) : (
                  <div>
            {isDboard ? (
              <div>
                    {this.props.userType ==0 ?(
                      <div>
                      <button type="button"className="btn btn-dark btn-lg" onClick={() => this.onCreateHack()}>
                          Add Hackathon
                      </button>
                      </div>
                    ):(
                      <div>
                      <h1>MY HACKATHONS</h1>
                    <hr/>
                    <HackathonCards onHackClick={this.handleHackClick} hackathons={hackdemo.hackathons.hacks}/>
                    </div>
                  )}
                    <br/><br/>
                    <h1>ALL HACKATHONS</h1>
                    <hr/>
                    <HackathonCards onHackClick={this.handleHackClick} hackathons={items}/>
                    <div style={{height: '1000px'}}/>
                </div>

            ):(
                <DashboardDetail hackName={this.curHackathonName} hackDesc={this.curHackathonDesc} backHandler={this.handleBackFromDD}/>
        )}
        </div>
      )}
        </div>
                <Footer/>
                <ScrollToTop/>
            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log("data from Dashboard :: " + JSON.stringify(state));
    const { items } = state.hackathonsdetail;
    return {
        items
    };
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };
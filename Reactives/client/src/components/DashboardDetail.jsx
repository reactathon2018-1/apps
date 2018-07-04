import React from 'react';
import LeaderBoard from './LeaderBoard';
import ModalPopup from "./ModalPopup";
class DashboardDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {lboard:false};
        //this.curHackathonName='';

    }

    handleBackFromLD(){
        console.log('lboard state change to true');
        this.setState({lboard:false})
    }

    onLeaderBoard(){
      console.log("leaderboard click");
      //this.curHackathonName=hackName;
      this.setState({lboard:true})
    }

    render(){
      const isLboard = this.state.lboard;
      this.onLeaderBoard = this.onLeaderBoard.bind(this);
      this.handleBackFromLD = this.handleBackFromLD.bind(this);
      console.log('isLboard : '+isLboard);
        return(
<div className="container">
              {isLboard ? (
                <LeaderBoard hackName={this.curHackathonName} hackName={this.props.hackName} backHandler={this.handleBackFromLD}/>
              ):(   <div>   <div className="row col-md-12 col-xs-12 col-sm-12">
                        <p>
                            <button type="button"className="btn btn-danger btn-lg" onClick={() => this.props.backHandler()}>
                                <span className="glyphicon glyphicon-arrow-left"></span> Back
                            </button>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-xs-5 col-md-5 col-sm-5 item-photo">
                            <img style={{maxWidth:'100%'}} src="../src/images/hackathon1.jpg" />
                        </div>
                        <div className="col-xs-5 col-md-5 col-sm-5" style={{border:'0px solid gray'}}>
                            <h3>{this.props.hackName}</h3>
                            <h5 style={{color:'#337ab7'}}>{this.props.hackDesc}</h5>
                            <div><label><b>StartDate : </b></label><label>04/07/2018</label></div>
                            <div><label><b>EndDate : </b></label><label>06/07/2018</label></div>
                            <h5>Team Size : 3 </h5>
                            <p></p>
                            <p></p>
                            <div className="section" style={{paddingBottom:'20px'}}>
                                <ModalPopup className="btn btn-light" buttonLabel="Compete"/>
                                <button onClick={this.onLeaderBoard} style={{marginTop:'20px'}} className="btn btn-info">LeaderBoard</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-9">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#rules">Rules</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#demo">Demos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#judging">Judging Criteria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#techstack">TechStack</a>
                            </li>
                        </ul>
                        <div style={{width:'100%',borderTop:'1px solid silver'}}>
                            <div className="tab-content">
                                <div className="tab-pane active container" id="rules">
                                    <div className="row col-xs-12 col-md-12 col-sm-12" style={{marginTop : '15px'}}>
                                        <ol>
                                            <li>There is no maximum or minimum team size. As a participant, you should make sure to check how many prizes are available per team. There is usually a limited number of prizes for each challenge. So if you form a large team and win a challenge, there might not be enough prizes for everyone on your team.</li>
                                            <li>Teams should be made up exclusively of students (or recent graduates within one year of having graduated) who are not organizers, volunteers, judges, sponsors, or in any other privileged position at the event.</li>
                                            <li>All team members should be present at the event. Leaving the venue for some time to hack elsewhere is fine.</li>
                                            <li>Teams can of course gain advice and support from organizers, volunteers, sponsors, and others.</li>
                                            <li>All work on a project should be done at the hackathon.</li>
                                            <li>Teams can use an idea they had before the event.</li>
                                            <li>Teams can work on ideas that have already been done. Hacks do not have to be “innovative”. If somebody wants to work on a common idea they should be allowed to do so and should be judged on the quality of their hack. These days it’s hard to find something that’s fully original and teams might not know an idea has been done before anyway.</li>
                                            <li>Teams can work on an idea that they have worked on before (as long as they do not re-use code).</li>
                                            <li>Teams can use libraries, frameworks, or open-source code in their projects. Working on a project before the event and open-sourcing it for the sole purpose of using the code during the event is against the spirit of the rules and is not allowed.</li>
                                            <li>Adding new features to existing projects is allowed. Judges will only consider new functionality introduced or new features added during the hackathon in determining the winners.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="tab-pane container" id="demo">
                                    <div className="row col-xs-12 col-md-12 col-sm-12" style={{marginTop : '15px'}}>
                                        <p>After hacking finishes, teams will show their projects each other and to the judges.</p>
                                        <p>  You are strongly encouraged to present a demo of what you have built. Pitches or presentations are discouraged. You are not judged on the quality of your pitch or the quality of your idea. As you are judged on what you built, you'll only hurt yourself by not showing a demo.</p>
                                        <p>


                                            You are encouraged to present what you have done even if your hack is broken or you weren’t able to finish. It's okay if you didn't finish your hack—that happens all the time! Completion is only one part of the judging criteria, so you might still do well. Also, demoing is not just about the competition. It's a chance to share with others what you learned and what you tried to build—that's what hacking's all about! For being courageous enough to demo, you'll receive a special MLH "I Demoed" sticker—it doesn't matter how good the demo is! In the case that you don't have anything to demo, you can give a presentation about what you tried and what you learned. Hearing what other people learned is interesting and inspiring for other attendees.
                                        </p>
                                    </div>
                                </div>
                                <div className="tab-pane container" id="techstack">
                                    <div className="row col-xs-12 col-md-12 col-sm-12" style={{marginTop : '15px'}}>
                                        <ul>
                                            <li>SpringBoot</li>
                                            <li>Angular5</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane container" id="judging">
                                    <div className="row col-xs-12 col-md-12 col-sm-12" style={{marginTop : '15px'}}>
                                        <p>Teams will be judged on these four criteria. Judges will weigh the criteria equally. During judging, participants should try to describe what they did for each criterion in their project.</p>
                                        <ul>
                                            <li><b>Technology: </b>How technically impressive was the hack? Was the technical problem the team tackled difficult? Did it use a particularly clever technique or did it use many different components? Did the technology involved make you go "Wow"?</li>
                                            <li><b>Design: </b>Did the team put thought into the user experience? How well designed is the interface? For a website, this might be about how beautiful the CSS or graphics are. For a hardware project, it might be more about how good the human-computer interaction is (e.g. is it easy to use or does it use a cool interface?).</li>
                                            <li><b>Completion:</b> Does the hack work? Did the team achieve everything they wanted?</li>
                                            <li><b>Learning:</b> Did the team stretch themselves? Did they try to learn something new? What kind of projects have they worked on before? If a team which always does virtual reality projects decides to switch up and try doing a mobile app instead, that exploration should be rewarded.</li>
                                        </ul>
                                        <p>These criteria will guide judges but ultimately judges are free to make decisions based on their gut feeling of which projects are the most impressive and most deserving.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
        )}
  </div> )
    }

}

export default DashboardDetail;

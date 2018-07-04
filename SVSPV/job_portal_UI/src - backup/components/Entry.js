import React, { Component } from 'react';
import '../App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class Input extends Component {
    render() {
        return (
            <div className="Input">
                <input id={this.props.name} required type={this.props.type} placeholder={this.props.placeholder} />
            </div>
        );
    }
};

class Modal extends Component {
    render() {
        return (
            <div className="Modal">
                <form onSubmit={this.props.onSubmit} className="ModalForm">
                    <Input id="name" type="text" placeholder="Candidate ID" />
                    <Input id="username" placeholder="28-06-1995" />
                    <button>Log in </button>
                </form>
            </div>
        );
    }
};

class Entry extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: this.props.mounted
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    handleSubmit(e) {//todo call the api and re render based on the response
        console.log('Entry:: handleSubmit called');
        this.setState({ mounted: false });
        e.preventDefault();
    }

    renderBackground(){ //todo render on image onload
        return(
            <div className = "App_bg"></div>
        )
    }

    render() {

        var child;
        if(this.state.mounted) {
            child = (<Modal onSubmit={this.handleSubmit} />);
        }

        return(
            <div>
                {this.renderBackground()}
                <div className="App">
                    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {child}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
};


export default Entry;

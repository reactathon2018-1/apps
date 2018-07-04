import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Menu from '../Menu/container/Menu'
import "../assets/css/_all-skins.min.css";
import "../assets/css/AdminLTE.css";
import "./Feedback.css";
import { connect } from 'react-redux';
import { submitFeedBack } from '../_actions/feedback.actions';

class FeedbackForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rating1: 1,
            rating2: 1,
            rating3: 1,
            rating4: 1,
            comment: '',
            name: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    onStarClick1(nextValue, prevValue, name) {
        this.setState({ rating1: nextValue });
    }
    onStarClick2(nextValue, prevValue, name) {
        this.setState({ rating2: nextValue });
    }
    onStarClick3(nextValue, prevValue, name) {
        this.setState({ rating3: nextValue });
    }
    onStarClick4(nextValue, prevValue, name) {
        this.setState({ rating4: nextValue });
    }

    onHandleChange(e) {
        this.setState({ comment: e.target.value })
    }

    handleSubmit() {
        const data = {
            rating1: this.state.rating1,
            rating2: this.state.rating2,
            rating3: this.state.rating3,
            rating4: this.state.rating4,
            comment: this.state.comment
        }
        console.log(data);
        this.props.submitFeedBack(data);
        this.setState({ SuccessMessage: 'FeedBack submitted successfully' }, () => window.setTimeout(() => this.setState({ SuccessMessage: null }), 5000))
        this.setState({
            rating1: 1,
            rating2: 1,
            rating3: 1,
            rating4: 1,
            comment: '',
            name: ''
        })
    }
    render() {
        const { rating1, rating2, rating3, rating4 } = this.state;
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <Menu></Menu>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Feedback</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {this.state.SuccessMessage && <div className='alert alert-success' style={{ width: '100%' }}>{this.state.SuccessMessage}</div>}
                                                <div className="container well well-sm" style={{ fontSize: "18px", lineHeight: "2em" }}>
                                                    <div>
                                                        <div className=" col-md-6">How would you rate the Overall Process of Interview?</div>
                                                        <StarRatingComponent
                                                            name="rate1"
                                                            starCount={5}
                                                            size={100}
                                                            value={rating1}
                                                            onStarClick={this.onStarClick1.bind(this)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className=" col-md-6">How well was the job description explained to you ?</div>
                                                        <StarRatingComponent
                                                            name="rate2"
                                                            starCount={5}
                                                            size={100}
                                                            value={rating2}
                                                            onStarClick={this.onStarClick2.bind(this)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className=" col-md-6">How was the communication throught the entire process?</div>
                                                        <StarRatingComponent
                                                            name="rate3"
                                                            starCount={5}
                                                            size={100}
                                                            value={rating3}
                                                            onStarClick={this.onStarClick3.bind(this)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className=" col-md-6">How was your in-person interview process ?</div>
                                                        <StarRatingComponent
                                                            name="rate4"
                                                            starCount={5}
                                                            size={100}
                                                            value={rating4}
                                                            onStarClick={this.onStarClick4.bind(this)}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-6">Provide your valuble comments:</div>
                                                        <textarea className="col-md-6" colSpan="5" placeholder="Enter your comments" value={this.state.comment} onChange={this.onHandleChange.bind(this)}></textarea>
                                                    </div>
                                                    <center style={{ padding: "5px" }}>
                                                        <button className="btn btn-primary" style={{ width: "15%", marginTop: "24px" }} onClick={this.handleSubmit.bind(this)}>Save</button>
                                                    </center>
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
    const { feedBackData } = state.feedbackReducer;
    return {
        feedBackData
    };
}

export default connect(mapStateToProps, { submitFeedBack })(FeedbackForm);

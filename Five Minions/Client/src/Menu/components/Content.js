import React, { Component } from 'react';
import "../../assets/css/_all-skins.min.css";
import "../../assets/css/AdminLTE.css";
import { Tabs, Tab } from 'react-bootstrap'
import ExpandRow from '../../JobsApplied/JobsApplied'
import { Link } from 'react-router-dom';

export default class Content extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        alert(`selected ${key}`);
        this.setState({ key });
    }
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Dashboard</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <Tabs
                                                activeKey={this.state.key}
                                                onSelect={this.handleSelect}
                                                id="controlled-tab-example"
                                            >
                                                <Tab eventKey={1} title="Job Search">
                                                    <ExpandRow />
                                                </Tab>
                                                <Tab eventKey={2} title="Jobs Applied">
                                                    Tab 2 content
                                                     </Tab>
                                                <Tab eventKey={3} title="Contact Us" disabled>
                                                    Tab 3 content
                                                    </Tab>
                                            </Tabs>
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
        )
    }
}
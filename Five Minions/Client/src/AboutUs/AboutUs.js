import React from 'react';
import Menu from '../Menu/container/Menu'
import "../assets/css/_all-skins.min.css";
import "../assets/css/AdminLTE.css";

export default class AboutUs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fromId: "",
            toId: '',
            subject: "",
            cc: "",
            body:''
        };
    }

    render() {

        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <Menu></Menu>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">About Us</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="col-md-4" style={{border: "1px solid #e8dbdb",borderRadius: "5px",boxShadow: "3px 2px 3px 1px"}}>
                                                    
                                                        <h3>Who we are:</h3>
                                                        <p> <b>Our mission:</b> Excello delivers the promise of the digital world by enhancing the ability of humans, businesses and society to do more new and do more good.
                                                        We stand for integrity, respect, performance excellence and accountability. This reaches beyond products and services, connecting our customers to a larger truth about what we do and why it matters. The Excello credo is a set of principles that describes our culture and our core values.
                                                    </p>
                                                    </div>
                                                    <div className="col-md-4" style={{border: "1px solid #e8dbdb",borderRadius: "5px",boxShadow: "3px 2px 3px 1px"}}>
                                                    <h3>Code of Conduct:</h3>
                                                    <p>We publish our Code of Conduct for employees, but this document also lets our customers know that integrity and respect underscore how we do business.
 
 We honor the core values written in our credo.
  
 We stand for integrity, respect, performance excellence and accountability. This reaches beyond products and services, connecting our customers to a larger truth about what we do and why it matters.
                                                         </p>
                                                         </div>
                                                         <div className="col-md-4" style={{border: "1px solid #e8dbdb",borderRadius: "5px",boxShadow: "3px 2px 3px 1px"}}>
                                                    <h3>What we do: </h3>
                                                    <p>We’ve got big plans to bring connected solutions to everything — from industrial and consumer products, to vehicles and buildings — so everything works more safely, productively and economically.
We're not just focused on providing connections, we've also created the Excello Open Development program designed to allow and encourage the development community to create new products, applications and services.
 </p>
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
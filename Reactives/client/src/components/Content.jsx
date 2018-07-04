import React from 'react';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper" style={{marginTop : '50px'}}>
                <div className="container-fluid">
                    <h1>Navbar</h1>
                    <hr/>
                    <p>The SB Admin navbar can be either fixed or static, and it supports the navbar-light and navbar-dark Bootstrap 4 classes.</p>
                    <div style={{height: '1000px'}}></div>
                </div>
                <Footer/>
                <ScrollToTop/>
            </div>
        );
    }
}

export default Content; 
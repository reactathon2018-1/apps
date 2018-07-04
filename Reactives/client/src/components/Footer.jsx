import React from 'react';

class Footer extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <footer className="sticky-footer">
                <div className="container">
                    <div className="text-center">
                    <small>Copyright © Hackathon Portal 2018</small>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
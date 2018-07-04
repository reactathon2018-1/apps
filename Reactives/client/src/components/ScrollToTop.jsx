import React from 'react';
import ScrollUp from 'react-scroll-up';

class ScrollToTop extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <ScrollUp showUnder={160} style={{right: '15px',bottom: '3px',width: '50px',height: '50px',textAlign:'center',color:'white',background: '#343A40',lineHeight: '45px',borderRadius: '.25rem'}}>
                <i className="fa fa-angle-up"></i>
            </ScrollUp>
        );
    }
}

export default ScrollToTop;
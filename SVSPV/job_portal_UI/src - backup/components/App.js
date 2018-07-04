import React,{Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Success!!!
                {React.Children.map(this.props.children,(child => React.cloneElement(child)))}
            </div>
        )
    }
}

export default App;
import React,{Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
		<div>
			<div id = "tab_header" className = "tab_header">
			</div>
            <div>
                {React.Children.map(this.props.children,(child => React.cloneElement(child,this.props)))}
            </div>
		</div>
        )
		
    }
}

export default App;
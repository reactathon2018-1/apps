import React from 'react';

class Badge extends React.Component{
  constructor(props){
    super(props);
  }

  getBadge(badgeId){
    switch(badgeId){
      case 0:
        return<p className="badge badge-admin">Admin</p>
      case 1:
        return <p className="badge bronze">Bronze</p>
      case 2:
        return <p className="badge silver">Silver</p>
      case 3:
        return <p className="badge gold">Gold</p>
      case 4:
      default:
        return <p className="badge platinum">Platinum</p>

    }
  }

  render(){
    console.log('badge id : '+this.props.badgeId)
    return(
      <div className="badge-container">
        {this.getBadge(this.props.badgeId)}
      </div>
    )
  }
}

  export default Badge;

import React from 'react';

import UserData from './UserData.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <UserData updateVal = {this.props.updateVal} allState = {this.props.allState}/>
      </div>
      
    );
  }
}

export default Profile;
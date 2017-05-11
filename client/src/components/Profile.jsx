import React from 'react';

import UserData from './UserData.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <UserData />
      </div>
      
    );
  }
}

export default Profile;
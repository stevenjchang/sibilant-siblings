import React from 'react';

import UserData from './UserData.jsx';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <img src="https://www.bigstockphoto.com/images/homepage/2016_bigstock_picks.jpg" height="42" width="42"/>
        <UserData />
      </div>
      
    );
  }
}

export default Profile;
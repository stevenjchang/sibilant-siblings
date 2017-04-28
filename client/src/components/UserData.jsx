import React from 'react';

class UserData extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <p>Preferences:</p>
        <p>Italian, Vegetarian, etc.</p>
        <p>Zip: pulled from db</p>
        
      </div>
    );
  }
}

export default UserData;
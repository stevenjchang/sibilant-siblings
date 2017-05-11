import React from 'react';

class UserData extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Username</p>
        <input name="username" defaultValue="Enter User"></input>
        <p>Password</p>
        <input name="password" defaultValue="Enter Password"></input>
        <p>Preferences</p>
        <input name="preferences" defaultValue="Italian"></input>
        <p>Zip</p>
        <input name="location" defaultValue="94016"></input>
      </div>
    );
  }
}

export default UserData;
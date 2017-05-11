import React from 'react';

class UserData extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {username: 'Enter User', password: 'Enter Password', preferences: 'Italian', location: '94016'};
  }


  render() {
    return (
      <div>
        <p>Username</p>
        <input disabled name="username" value={this.props.allState.username} onChange={this.props.updateVal.bind(this, 'username')}></input>
        <p>Password</p>
        <input disabled name="password" value={this.props.allState.password} onChange={this.props.updateVal.bind(this, 'password')}></input>
        <p>Preferences</p>
        <input name="preferences" value={this.props.allState.preferences} onChange={this.props.updateVal.bind(this, 'preferences')}></input>
        <p>Zip</p>
        <input name="location" value={this.props.allState.location} onChange={this.props.updateVal.bind(this, 'location')}></input>
      </div>
    );
  }
}

export default UserData;
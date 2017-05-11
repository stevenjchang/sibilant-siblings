import React from 'react';

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: 'Enter User', password: 'Enter Password', preferences: 'Italian', location: '94016'};
  }

  updateVal(name, event) {
    var updater = {};
    updater[name] = event.target.value;
    this.setState(updater);
  }

  render() {
    return (
      <div>
        <p>Username</p>
        <input name="username" value={this.state.username} onChange={this.updateVal.bind(this, 'username')}></input>
        <p>Password</p>
        <input name="password" value={this.state.password} onChange={this.updateVal.bind(this, 'password')}></input>
        <p>Preferences</p>
        <input name="preferences" value={this.state.preferences} onChange={this.updateVal.bind(this, 'preferences')}></input>
        <p>Zip</p>
        <input name="location" value={this.state.location} onChange={this.updateVal.bind(this, 'location')}></input>
      </div>
    );
  }
}

export default UserData;
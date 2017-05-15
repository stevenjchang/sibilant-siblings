import React from 'react';

class UserData extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id='input-form'>
        <label>Username</label>
        <br />
        <input disabled name="username" value={this.props.allState.username} onChange={this.props.updateVal.bind(this, 'username')}></input>
        <br />
        <label>Password</label>
        <br />
        <input disabled name="password" value={this.props.allState.password} onChange={this.props.updateVal.bind(this, 'password')}></input>
        <br />
        <label>Preferences</label>
        <br />
        <input name="preferences" value={this.props.allState.preferences} onChange={this.props.updateVal.bind(this, 'preferences')}></input>
        <br />
        <label>Zip Code</label>
        <br />
        <input name="location" value={this.props.allState.location} onChange={this.props.updateVal.bind(this, 'location')}></input>
        <br />
      </div>
    );
  }
}

export default UserData;
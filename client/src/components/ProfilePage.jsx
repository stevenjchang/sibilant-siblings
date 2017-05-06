import React from 'react';

import Profile from './Profile.jsx';
import QuestButton from './QuestButton.jsx';
import QuestLog from './QuestLog.jsx';

class ProfilePage extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    return(
    <div>
      <Profile />
      <QuestButton questOnClick = {this.props.questOnClick}/>
      <QuestLog />
    </div>
    );
  }
}

export default ProfilePage;
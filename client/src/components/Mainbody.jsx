import React from 'react';
import QuestPage from './QuestPage.jsx';
import ResultPage from './ResultPage.jsx';
import ProfilePage from './ProfilePage.jsx';

class Mainbody extends React.Component {
  constructor (props) {
    super(props);

    this.state = {component: <ProfilePage />};
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({component: <ResultPage />});
  }

  render() {
    return (
          <div>
             {this.state.component}
         </div>
    );
  }
}

export default Mainbody;
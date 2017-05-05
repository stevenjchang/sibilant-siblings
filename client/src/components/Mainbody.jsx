import React from 'react';
import QuestPage from './QuestPage.jsx';
import ResultPage from './ResultPage.jsx';


class Mainbody extends React.Component {
  constructor (props) {
    super(props);

    this.state = {component: <QuestPage />};
    
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
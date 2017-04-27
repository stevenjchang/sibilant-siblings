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
      <div className="col-md-4 col-md-offset-4 text-center">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Quest</h3>
                <a href="#" onClick={this.handleClick}>
                  Click me
                </a>
             {this.state.component}
          </div>
        </div>
      </div>
    );
  }
}

export default Mainbody;
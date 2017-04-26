import React from 'react';
import ReactDOM from 'react-dom';
import QuestItem from './QuestItem.jsx';

class Mainbody extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 text-center">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Quest</h3>
            <QuestItem />
            <QuestItem />
            <QuestItem />
            <QuestItem />
            <QuestItem />
          </div>
        </div>
      </div>
    );
  }
}

export default Mainbody;
import React from 'react';
import Task from './Task.jsx';

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
            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </div>
    );
  }
}

export default Mainbody;
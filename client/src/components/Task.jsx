import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            Restaurant, rating, thumbs up, money rating here
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
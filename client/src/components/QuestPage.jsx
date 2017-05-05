import React from 'react';
import Task from './Task.jsx';

class QuestPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2> Food Quest </h2>
        <Task />
        <Task />
        <Task />
      </div>
    );
  }
}

export default QuestPage;
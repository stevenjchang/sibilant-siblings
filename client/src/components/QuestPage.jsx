import React from 'react';
import Task from './Task.jsx';

class QuestPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Task />
        <Task />
        <Task />
      </div>
    );
  }
}

export default QuestPage;
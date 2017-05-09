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
          {this.props.restos.businesses.map((restas) => { 
            return (
              <div>
                <Task boz={restas}/>; 
              </div>
            );
          })}
      </div>
    );
  }
}

export default QuestPage;
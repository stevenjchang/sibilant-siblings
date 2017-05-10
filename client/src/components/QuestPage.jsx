import React from 'react';
import Task from './Task.jsx';

class QuestPage extends React.Component {
  constructor (props) {
    super(props);
    shouldComponentUpdate: (nextProps, nextState) => {
    // return a boolean value
      return true;
    };
  }

  render() {
    return (
      <div>
        <h2> Food Quest </h2>
          {(this.props.restos.length > 0) ? this.props.restos.map((restos, i) => {
            return (
              <div key={i}>
                <Task bis={restos}/>
              </div>
            );
          }) : console.log('it\'s not greater than 0')}
      </div>
    );
  }
}

export default QuestPage;
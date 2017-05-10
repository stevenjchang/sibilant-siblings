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
          {console.log(this.props.restos)}
          {(this.props.restos.length > 0) ? this.props.restos.map((restas) => { 
            return (
              <div>
                <Task boz={restas}/>; 
                {restas}
              </div>
            );
          }) : console.log('ITS NULL')}
      </div>
    );
  }
}

export default QuestPage;
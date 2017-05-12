import React from 'react';
import Task from './Task.jsx';

class QuestPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
          {(this.props.restos.length > 0) ? this.props.restos.map((restos, i) => {
            return (
              <div key={i}>
                <Task bis={restos}/>
              </div>
            );
          }) : console.log('The map has no array in QuestPage.jsx')}
      </div>
    );
  }
}

export default QuestPage;
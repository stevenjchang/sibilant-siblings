import React from 'react';

class QuestButton extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <button type="button" onClick={() => this.props.questOnClick('quest_page')}>Quest!</button>
    );
  }
}

export default QuestButton
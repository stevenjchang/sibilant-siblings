import React from 'react';

class AnotherQuestButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Summary />
        <AnotherQuestButton />
      </div>
    );
  }
}

export default AnotherQuestButton;
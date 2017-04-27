import React from 'react';

class AnotherQuestButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* This component has a stateless plain background image. */}
        {/* This component has a stateless text headline. */}
        <Summary />
        <AnotherQuestButton />
      </div>
    );
  }
}

export default AnotherQuestButton;
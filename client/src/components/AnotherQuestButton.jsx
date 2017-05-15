import React from 'react';

class AnotherQuestButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* This component has a stateless text headline. */}
        <button>Start Another Quest</button>
      </div>
    );
  }
}

export default AnotherQuestButton;
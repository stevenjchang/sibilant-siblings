import React from 'react';
import SummaryTask from './SummaryTask.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* This page has a plain background image. */}
        <h2>You visited:</h2>
        <SummaryTask />
        <SummaryTask />
        <SummaryTask />
      </div>
    );
  }
}

export default Summary;
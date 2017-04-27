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
        <SummaryTask />
      </div>
    );
  }
}

export default Summary;
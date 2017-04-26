import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h2> This is the app component </h2>
      </div>
    );
  }
}

export default App;
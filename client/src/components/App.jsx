import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import MainBody from './Mainbody.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <MainBody />
        <Footer />
      </div>
    );
  }
}

export default App;
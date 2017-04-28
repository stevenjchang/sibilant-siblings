import React from 'react';
import Header from './Header.jsx';
import MainBody from './Mainbody.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {input: ''};

  }

  handleClick(event) {
    this.setState({input: event});
  }

  render() {
    return (
      <div>
        <Header />
        <MainBody />
        <Footer value= {onChange = {handleClick}} />
      </div>
    );
  }
}

export default App;
import React from 'react';
import Header from './Header.jsx';
import MainBody from './Mainbody.jsx';
import Footer from './Footer.jsx';
import QuestPage from './QuestPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {input: 'main_body'};

  }

  handleClick(componentName) {
    this.setState({input: componentName});
  }

  render() {
    var ComponentToRender = MainBody;
    if (this.state.input === 'main_body') {
      ComponentToRender = MainBody;
    } else if (this.state.input === 'quest_page') {
      ComponentToRender = QuestPage;
    }
    return (
      <div>
        <Header />
        <ComponentToRender />
        <Footer handleClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
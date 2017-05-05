import React from 'react';
import Header from './Header.jsx';
import MainBody from './Mainbody.jsx';
import Footer from './Footer.jsx';
import QuestPage from './QuestPage.jsx'; 
import ProfilePage from './ProfilePage.jsx';
import ResultPage from './ResultPage.jsx';


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
     if (this.state.input === 'quest_page') {
      ComponentToRender = QuestPage;
    } else if (this.state.input === 'profile_page') {
      ComponentToRender = ProfilePage;
    } else if (this.state.input === 'login_page') {
      ComponentToRender = LoginPage
    } else if (this.state.input === 'result_page'){
      ComponentToRender = ResultPage
    }
    return (
      <div>
        <Header />

         <div className="col-md-4 col-md-offset-4 text-center">
          <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Quest</h3>
                
              <ComponentToRender />

          </div>
        </div>


      </div>
        <Footer handleClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import MainBody from './Mainbody.jsx';
import Footer from './Footer.jsx';
import QuestPage from './QuestPage.jsx';
import ResultPage from './ResultPage.jsx';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import ProfilePage from './ProfilePage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: 'profile_page', biz: [], username: 'Enter User', password: 'Enter Password', preferences: 'Italian', location: '94016' };
    this.updateVal = this.updateVal.bind(this);
  }

  questOnClick(componentName) {
    var prefInfo = {username: this.state.username, password: this.state.password, preferences: this.state.preferences, location: this.state.location};
    $.ajax({
      url: '/quest',
      method: 'POST',
      data: JSON.stringify(prefInfo),
      contentType: 'application/json',
      dataType: 'json',
      success: ()=>{
        console.log('this was posted');
      },
      error: (err)=>{
        console.log('Error occured with POST ajax call', err);
      }
    });
    $.ajax({
      url: '/quest',
      method: 'GET',
      success: (data) => {
        this.setState({biz: data});
      },
      error: (err) => {
        console.log('Some Error:', err);
      }
    });
    this.setState({input: componentName});
    
  }
  
  handleClick(componentName) {
    this.setState({input: componentName});
  }

  updateVal(name, event) {
    var updater = {};
    updater[name] = event.target.value;
    this.setState(updater);
  }


  render() {

    var ComponentToRender = QuestPage;
    if (this.state.input === 'quest_page') {
      ComponentToRender = QuestPage;
    } else if (this.state.input === 'profile_page') {
      ComponentToRender = ProfilePage;
    } else if (this.state.input === 'result_page') {
      ComponentToRender = ResultPage;
    } else if (this.state.input === 'login_page') {
      ComponentToRender = LoginPage;
    } else if (this.state.input === 'signup_page') {
      ComponentToRender = SignupPage;
    } 

    return (
      <div>
          <Header />

         <div className="col-md-4 col-md-offset-4 text-center">
          <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"></h3>
              <ComponentToRender questOnClick={this.questOnClick.bind(this)} restos={this.state.biz} updateVal={this.updateVal} allState={this.state}/>
                   
          </div>
        </div>


      </div>
        <Footer handleClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
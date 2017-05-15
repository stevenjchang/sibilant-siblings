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
    this.updateVal = this.updateVal.bind(this);
    this.state = { input: 'profile_page', biz: [], username: ' ', password: ' ', location: ' ', preferences: ' ' };
  }
  
  componentWillMount() {
    var stateObject = {};
    $.ajax({
      url: '/getprofile',
      method: 'GET',
      success: (userdata) => {
        stateObject = { username: userdata[0].username, password: '******', location: userdata[0].location, preferences: userdata[0].preferences };
        this.setState(stateObject);
      },
      error: (err) => {
        console.log('Error getting user data:', err);
      }
    });
  }

  questOnClick(componentName) {
    var prefInfo = {username: this.state.username, preferences: this.state.preferences, location: this.state.location};
    $.ajax({
      url: '/setprofile',
      method: 'POST',
      data: JSON.stringify(prefInfo),
      contentType: 'application/json',
      dataType: 'json',
      success: ()=>{
        console.log('this was posted');
      },
      error: (err)=>{
        console.log('Error occured POSTing profile.');
      }
    });
    $.ajax({
      url: '/quest',
      method: 'GET',
      success: (data) => {
        this.setState({biz: data});
      },
      error: (err) => {
        console.log('Error occurred GETting quest.');
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

         <div className="col-xs-10 col-xs-offset-1 text-center">
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
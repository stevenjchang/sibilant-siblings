import React from 'react';
import MainBody from './Mainbody.jsx';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {component: <MainBody />};
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-fixed-bottom col-md-6 col-md-offset-3 text-center">
          <hr />
          <h3>
            <a href="#" onClick={() => this.props.handleClick('profile_page')}>
              Profile
            </a>
            <a href="#" onClick={() => this.props.handleClick('quest_page')}>
              Quest
            </a>
            <a href="#" onClick={() => this.props.handleClick('result_page')}>
              Result
            </a>
            <a href="#" onClick={() => this.props.handleClick('login_page')}>
              Login
            </a>
            <a href="#" onClick={() => this.props.handleClick('signup_page')}>
              Sign Up
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default Footer;
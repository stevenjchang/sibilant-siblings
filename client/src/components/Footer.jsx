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
            <a href="#" onClick={this.handleClick}>
              Profile
            </a>
            <a href="#" onClick={this.handleClick}>
              MainBody
            </a>
            <a href="#" onClick={() => this.props.handleClick('quest_page')}>
              QuestPage
            </a>
            <a href="#" onClick={this.handleClick}>
              Summary
            </a>
            <a href="#" onClick={this.handleClick}>
              Task
            </a>
        </div>
      </div>
    );
  }
}

export default Footer;
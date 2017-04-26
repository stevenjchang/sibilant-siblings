import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header text-center">
          <h1>FoodQuest</h1>
          <small>The go-to app for foodies</small>
        </div>
      </div>
    );
  }
}

export default Header;
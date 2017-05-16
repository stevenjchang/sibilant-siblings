import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header text-center">
            <h1 className='text-shadow'>FoodQuest</h1>
            <small>the go-to app for Adventurous Eaters</small>      
        </div>
      </div>
    );
  }
}

export default Header;
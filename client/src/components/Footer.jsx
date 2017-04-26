import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-fixed-bottom col-md-6 col-md-offset-3 text-center">
          <hr />
          <h3>This is the footer</h3>
        </div>
      </div>
    );
  }
}

export default Footer;
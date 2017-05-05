import React from 'react';

class SignupPage extends React.Component {
  render() {
    return (
      <div className='col-md-12'>
        <form className='input-group input-group-lg text-center col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4'>
          <h3>Sign Up</h3>
          <input type="text" className="form-control" placeholder="username" />
          <input type="text" className="form-control" placeholder="password" />
          <p>- - -</p>
          <button type="submit" className="btn btn-danger btn-lg col-xs-12">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignupPage;


import React from 'react';

class Login extends React.Component {
  captureUsername(e) {
    console.log('e.target.value is ',e.target.value);
    e.preventDefault();
    this.props.login(e.target.value);
    // e.target.value

  }

  render() {
    return (
      <div className='col-md-12'>
        <form className='input-group input-group-lg text-center col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4' onClick={this.captureUsername.bind(this)}>
          <h3>Login</h3>
          <input type="text" className="form-control" placeholder="username" />
          <input type="text" className="form-control" placeholder="password" />
          <p>- - -</p>
          <button type="submit" className="btn btn-danger btn-lg col-xs-12">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;

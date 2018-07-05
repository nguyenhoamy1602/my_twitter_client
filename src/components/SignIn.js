import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { CLIENT_ID } from '../config.js';

class SignIn extends Component {
  render() {
      return (
        <div className={`modal ${this.props.open ? 'active' : null}`}>
        <div className="modal-overlay"></div>
        <div className="modal-container">
        <div className="modal-header">
        <button
        onClick={this.props.close}
        className="btn btn-clear float-right"></button>
        <div className="modal-title">
        <h4>Sign In to Post A Tweet</h4>
        </div>
        </div>
        <div className="modal-body">
        <div className="content">
        <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={response => this.props.logIn(response.profileObj)}
        onFailure={response => console.log(response)}
        />
        </div>
        </div>
        <div className="modal-footer">
        </div>
        </div>
        </div>
      );

  }
}

export default SignIn;

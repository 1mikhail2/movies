import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import { loginUser } from '../../../../redux/auth-reducer';

import Login from '../component';

class LoginContainer extends React.Component {

  onLogin(formData) {
    const {
      email,
      password
    } = formData;

    const {
      loginUser
    } = this.props;

    loginUser(email, password);
  }

  render() {
    return (
      <Login onLogin={this.onLogin.bind(this)} />
    );
  }
};

const LoginContainerCompose = compose(
  connect(null, { loginUser }),
  withAuthRedirect
)(LoginContainer);

export default LoginContainerCompose;
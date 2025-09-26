import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../../constants/routes';

import CenteredPageComponent from '../../../components/page-components/centered-page-component';
import LoginForm from '../../../components/forms/login-form';
import Logo from '../../../components/logo';

import './login.scss';

const Login = (props) => {
  const {
    onLogin
  } = props;

  return (
    <CenteredPageComponent
      className="login"
    >
      <Logo className="login__logo" />
      <h3 className="login__title">Sign in with your account</h3>
      <LoginForm
        className="login__form"
        onSubmit={onLogin}
      />
      <NavLink
        className="login__signup-link"
        to={ROUTES.REGISTRATION}
      >
        Don't have an account? Create one now
      </NavLink>
    </CenteredPageComponent>
  );
};

export default Login;
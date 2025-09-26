import React from 'react';
import { connect } from "react-redux";
import ROUTES from '../common/constants/routes';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

const withProfileRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      const {
        isAuth
      } = this.props;

     if (localStorage.getItem('token')) return <Redirect to={ROUTES.MOVIES} />

      return (
        <Component {...this.props} />
      )
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};

export default withProfileRedirect;
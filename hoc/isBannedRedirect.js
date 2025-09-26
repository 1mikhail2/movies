import React from 'react';
import { connect } from "react-redux";
import ROUTES from '../common/constants/routes';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Preloader from '../common/components/preloader';

const mapStateToProps = (state) => ({
  additionalUserData: state.users.additionalUserData
});

const withBannedRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      const {
        additionalUserData
      } = this.props;

      if (additionalUserData.length === 0 && additionalUserData != "") return <Preloader />

      if (additionalUserData.ban) return <Redirect to={ROUTES.BANNED} />

      return (
        <Component {...this.props} />
      )
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};

export default withBannedRedirect;
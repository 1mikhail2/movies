import React from 'react';
import { connect } from "react-redux";
import ROUTES from '../common/constants/routes';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAdditionalUserDataRequest } from '../redux/users-reducer';

const mapStateToProps = (state) => ({
  additionalUserData: state.users.additionalUserData,
  userId: state.auth.userId
});

const withAdditionalUserData = (Component) => {

  class RedirectComponent extends React.Component {
    componentDidMount() {
      const {
        getAdditionalUserDataRequest,
        userId
      } = this.props;

      getAdditionalUserDataRequest(userId);
    }

    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

  return connect(mapStateToProps, { getAdditionalUserDataRequest })(RedirectComponent);
};

export default withAdditionalUserData;
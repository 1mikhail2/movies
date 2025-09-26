import React from "react";
import { connect } from "react-redux";
import { getAuthUserDataRequest } from '../../redux/auth-reducer';
import { getAdditionalUserDataRequest } from '../../redux/users-reducer';

import App from "../component";

class AppContainer extends React.Component {
  componentDidMount() {
    const {
      getAuthUserDataRequest,
      getAdditionalUserDataRequest,
      userId
    } = this.props;

    getAuthUserDataRequest(localStorage.getItem('token'));
    getAdditionalUserDataRequest(userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      const {
        getAdditionalUserDataRequest,
        userId
      } = this.props;

      getAdditionalUserDataRequest(userId);
    }
  }

  render() {
    return <App {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    additionalUserData: state.users.additionalUserData
  }
}

export default connect(mapStateToProps, { getAuthUserDataRequest, getAdditionalUserDataRequest })(AppContainer);
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getAllUsersVerificationApplicationsRequest,
  deleteUserVerificationApplicationRequest,
  addProAccountRequest
} from '../../../../../redux/users-reducer';

import AdminPanelVerification from '../component';

class AdminPanelVerificationContainer extends React.Component {
  componentDidMount() {
    const {
      getAllUsersVerificationApplicationsRequest
    } = this.props;

    getAllUsersVerificationApplicationsRequest();
  }

  onDeleteUserVerificationApplication(id) {
    const {
      deleteUserVerificationApplicationRequest
    } = this.props;

    deleteUserVerificationApplicationRequest(id);
  }

  onAddProAccount(id) {
    const {
      addProAccountRequest
    } = this.props;

    addProAccountRequest(id);
  }

  render() {
    return (
      <AdminPanelVerification
        {...this.props}
        onDeleteUserVerificationApplication={this.onDeleteUserVerificationApplication.bind(this)}
        onAddProAccount={this.onAddProAccount.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allUsersVerificationApplications: state.users.allUsersVerificationApplications
  }
}

export default compose(
  connect(mapStateToProps, {
    getAllUsersVerificationApplicationsRequest,
    deleteUserVerificationApplicationRequest,
    addProAccountRequest
  }),
  withRouter
)(AdminPanelVerificationContainer);
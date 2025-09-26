import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAllReportsRequest, addWarnRequest, declineReportRequest } from '../../../../../redux/users-reducer';

import AdminPanelReports from '../component';

class AdminPanelReportsContainer extends React.Component {
  componentDidMount() {
    const {
      getAllReportsRequest
    } = this.props;

    getAllReportsRequest();
  }

  onAddWarn(userId) {
    const {
      addWarnRequest
    } = this.props;

    addWarnRequest(localStorage.getItem('token'), userId);
  }

  onDeclineReport(id) {
    const {
      declineReportRequest
    } = this.props;

    declineReportRequest(localStorage.getItem('token'), id);
  }

  render() {
    return (
      <AdminPanelReports
        {...this.props}
        onAddWarn={this.onAddWarn.bind(this)}
        onDeclineReport={this.onDeclineReport.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reports: state.users.reports
  }
}

export default compose(
  connect(mapStateToProps, {
    getAllReportsRequest,
    addWarnRequest,
    declineReportRequest
  }),
  withRouter
)(AdminPanelReportsContainer);
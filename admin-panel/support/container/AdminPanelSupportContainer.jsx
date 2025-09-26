import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getSupportsRequest } from '../../../../../redux/support-reducer';

import AdminPanelFeedback from '../component';

class AdminPanelFeedbackContainer extends React.Component {
  componentDidMount() {
    const {
      getSupportsRequest
    } = this.props;

    getSupportsRequest();
  }

  render() {
    return (
      <AdminPanelFeedback {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    supportList: state.support.supportList
  }
}

export default compose(
  connect(mapStateToProps, {
    getSupportsRequest
  }),
  withRouter
)(AdminPanelFeedbackContainer);
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getFeedbacksRequest } from '../../../../../redux/feedback-reducer';

import AdminPanelFeedback from '../component';

class AdminPanelFeedbackContainer extends React.Component {
  componentDidMount() {
    const {
      getFeedbacksRequest
    } = this.props;

    getFeedbacksRequest();
  }

  render() {
    return (
      <AdminPanelFeedback {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feedbackList: state.feedback.feedbackList
  }
}

export default compose(
  connect(mapStateToProps, {
    getFeedbacksRequest
  }),
  withRouter
)(AdminPanelFeedbackContainer);
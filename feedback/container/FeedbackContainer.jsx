import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { sendFeedbackRequest } from '../../../../redux/feedback-reducer';
import { reset } from "redux-form";
import withBannedRedirect from '../../../../hoc/isBannedRedirect';

import Feedback from '../component';
import withAdditionalUserData from '../../../../hoc/withAdditionalUserData';

class FeedbackContainer extends React.Component {
  onSendFeedback(feedback, dispatch) {
    const {
      sendFeedbackRequest
    } = this.props;

    const {
      name,
      email,
      comments,
      feedbackType
    } = feedback;

    sendFeedbackRequest(name, email, comments, feedbackType);
    dispatch(reset("feedback"));
  }

  render() {
    return (
      <Feedback
        {...this.props}
        onSendFeedback={this.onSendFeedback.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    successSending: state.feedback.successSending
  }
}

export default compose(
  connect(mapStateToProps, {
    sendFeedbackRequest
  }),
  withBannedRedirect,
  withAdditionalUserData,
  withRouter
)(FeedbackContainer);
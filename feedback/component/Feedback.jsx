import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PageComponent from '../../../components/page-components/page-component';
import FeedbackForm from '../../../components/forms/feedback-form';
import Logo from '../../../components/logo';
import Footer from '../../../components/footer';

import './feedback.scss';
import PageWithSuccessMessage from '../../../components/page-components/page-with-success-message/PageWithSuccessMessage';

const Feedback = (props) => {
  const {
    className,
    onSendFeedback,
    successSending
  } = props;

  return (
    <PageWithSuccessMessage
      successSending={successSending}
      message="Submit successfully"
    >
      <PageComponent
        className={classNames("feedback", className)}
        title="Feedback"
      >
        <div className="feedback__container">
          <Logo className="feedback__logo" />
          <p className="feedback__text">Use the form below to send us your comments.
          We read all feedback carefully, but we are unable to respond to each submission individually.
        If you provide your email address, you agree that we may contact you to better understand the comments you submitted.</p>
          <FeedbackForm onSubmit={onSendFeedback} />
        </div>
      </PageComponent>
      <Footer />
    </PageWithSuccessMessage>
  );
};

export default Feedback;
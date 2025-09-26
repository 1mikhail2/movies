import React from 'react';
import PropTypes from 'prop-types';

import AdminPanel from '../../component';
import FeedbackItem from '../../../../components/feedback-item';
import EmptyListMessage from '../../../../components/empty-list-message';

import './admin-panel-feedback.scss';

const AdminPanelFeedback = (props) => {
  const {
    feedbackList
  } = props;

  const feedbackItemsList = feedbackList.map((feedbackListItem, index) => (
    <FeedbackItem
      id={feedbackListItem.id}
      key={index}
      className="admin-panel-feedback__item"
      email={feedbackListItem.email}
      name={feedbackListItem.name}
      feedback={feedbackListItem.comments}
      feedbackType={feedbackListItem.feedbackType}
      createdAt={feedbackListItem.createdAt}
    />
  ));

  return (
    <AdminPanel className="admin-panel-feedback">
      {feedbackItemsList.length === 0 ? <EmptyListMessage /> : feedbackItemsList}
    </AdminPanel>
  );
};

export default AdminPanelFeedback;
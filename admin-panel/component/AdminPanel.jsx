import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import PageComponent from '../../../components/page-components/page-component';
import NavPage from '../../../components/nav-page';
import NavPageItem from '../../../components/nav-page/nav-page-item';

import usersIcon from '../../../../assets/icons/user-circle.svg';
import feedbackIcon from '../../../../assets/icons/feedback.svg';
import reportIcon from '../../../../assets/icons/report.svg';
import supportIcon from '../../../../assets/icons/support.svg';
import verificationIcon from '../../../../assets/icons/verification.svg';

import './admin-panel.scss';

const AdminPanel = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <PageComponent
      title="Admin panel"
      className={classNames("admin-panel", className)}
    >
      <div className="admin-panel__container">
        <div className="admin-panel__nav">
          <NavPage>
            <NavPageItem
              glyph={usersIcon.id}
              viewBox={usersIcon.viewBox}
              navLink={ROUTES.ADMIN_PANEL}
              caption="Users list"
            />
            <NavPageItem
              glyph={feedbackIcon.id}
              viewBox={feedbackIcon.viewBox}
              navLink={`${ROUTES.ADMIN_PANEL}/feedback`}
              caption="Feedback list"
            />
            <NavPageItem
              glyph={reportIcon.id}
              viewBox={reportIcon.viewBox}
              navLink={`${ROUTES.ADMIN_PANEL}/reports`}
              caption="Reports"
            />
            <NavPageItem
              glyph={supportIcon.id}
              viewBox={supportIcon.viewBox}
              navLink={`${ROUTES.ADMIN_PANEL}/support-list`}
              caption="Support list"
            />
            <NavPageItem
              glyph={verificationIcon.id}
              viewBox={verificationIcon.viewBox}
              navLink={`${ROUTES.ADMIN_PANEL}/users-verification`}
              caption="Verification applications"
            />
          </NavPage>
        </div>
        <div className="admin-panel__content">
          {children}
        </div>
      </div>
    </PageComponent>
  );
};

export default AdminPanel;
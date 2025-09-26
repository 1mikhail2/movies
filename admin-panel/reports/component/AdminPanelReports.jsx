import React from 'react';
import PropTypes from 'prop-types';

import AdminPanel from '../../component';
import ReportItem from '../../../../components/report-item';
import EmptyListMessage from '../../../../components/empty-list-message';

import noAvatar from '../../../../../assets/images/no-avatar.jpg';

import './admin-panel-reports.scss';

const AdminPanelReports = (props) => {
  const {
    reports,
    onAddWarn,
    onDeclineReport
  } = props;

  const reportsList = reports.map((report, index) => (<ReportItem
    id={report.id}
    key={index}
    className="admin-panel-reports__item"
    name={report.name}
    report={report.report}
    createdAt={report.createdAt}
    onAddWarn={() => onAddWarn(report.UserId)}
    onDeclineReport={() => onDeclineReport(report.id)}
    reportName={!report.User.name ? "Loading name..." : report.User.name}
    src={!report.User.avatarImage ? noAvatar : report.User.avatarImage}
    alt={!report.User.name ? "Avatar" : report.User.name}
  />
  ));;

  return (
    <AdminPanel className="admin-panel-reports">
      {reportsList.length === 0 ? <EmptyListMessage /> : reportsList}
    </AdminPanel>
  );
};

export default AdminPanelReports;
import React from 'react';
import PropTypes from 'prop-types';

import AdminPanel from '../../component';
import SupportItem from '../../../../components/support-item/SupportItem';
import EmptyListMessage from '../../../../components/empty-list-message';

const AdminPanelSupport = (props) => {
  const {
    supportList
  } = props;

  const supportItemList = supportList.map((supportItem, index) => (
    <SupportItem
      id={supportItem.id}
      key={index}
      className="admin-panel-reports__item"
      name={supportItem.name}
      problem={supportItem.problem}
      details={supportItem.details}
      createdAt={supportItem.createdAt}
    />
  ));

  return (
    <AdminPanel className="admin-panel-feedback">
      {supportItemList.length === 0 ? <EmptyListMessage /> : supportItemList}
    </AdminPanel>
  );
};

export default AdminPanelSupport;
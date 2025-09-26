import React from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import FindUsersItem from '../../../components/find-users-item';
import AdminPanel from '../component';

import noAvatar from '../../../../assets/images/no-avatar.jpg';

const AdminPanelUsersList = (props) => {
  const {
    users,
    onAddAdminRules,
    user
  } = props;

  const usersList = users.map((userItem, index) => (
    <FindUsersItem
      className="admin-panel__user-item"
      navLink={`${ROUTES.PROFILE}/${userItem.id}`}
      id={userItem.id}
      key={index}
      name={userItem.name}
      createdAt={userItem.createdAt}
      src={!userItem.avatarImage ? noAvatar : userItem.avatarImage}
      alt={userItem.email}
      onClick={() => onAddAdminRules(userItem.id)}
      isAdmin={userItem.admin}
    />
  ));

  return (
    <AdminPanel>
      {usersList}
    </AdminPanel>
  );
};

export default AdminPanelUsersList;
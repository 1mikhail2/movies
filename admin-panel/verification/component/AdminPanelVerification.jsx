import React from 'react';
import PropTypes from 'prop-types';

import AdminPanel from '../../component';
import EmptyListMessage from '../../../../components/empty-list-message';
import UserApplicationItem from '../../../../components/user-application-item';

import noAvatar from '../../../../../assets/images/no-avatar.jpg';

const AdminPanelVerification = (props) => {
  const {
    allUsersVerificationApplications,
    onDeleteUserVerificationApplication,
    onAddProAccount
  } = props;

  const allUsersVerificationApplicationsList = allUsersVerificationApplications.map((userVerificationApplication, index) => (
    <UserApplicationItem
      id={userVerificationApplication.id}
      key={index}
      className="admin-panel-feedback__item"
      src={!userVerificationApplication.User.avatarImage ? noAvatar : userVerificationApplication.User.avatarImage}
      alt={userVerificationApplication.User.name}
      email={userVerificationApplication.User.email}
      name={userVerificationApplication.User.name}
      category={userVerificationApplication.category}
      country={userVerificationApplication.country}
      general={userVerificationApplication.general}
      wikiArticle={userVerificationApplication.wikiArticle}
      website={userVerificationApplication.website}
      socialNetworks={userVerificationApplication.socialNetworks}
      onDeleteUserVerificationApplication={() => onDeleteUserVerificationApplication(userVerificationApplication.id)}
      onAddProAccount={() => onAddProAccount(userVerificationApplication.UserId)}
    />
  ));

  return (
    <AdminPanel className="admin-panel-verification">
      {allUsersVerificationApplicationsList.length === 0 ? <EmptyListMessage /> : allUsersVerificationApplicationsList}
    </AdminPanel>
  );
};

export default AdminPanelVerification;
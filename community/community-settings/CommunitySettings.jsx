import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';
import { NavLink } from 'react-router-dom';

import PageComponent from '../../../components/page-components/page-component';
import Avatar from '../../../components/avatar';
import ArticleInfo from '../../../components/article-info';
import CommunitySettingsForm from '../../../components/forms/community-settings-form';

import noCommunityAvatar from '../../../../assets/images/no-photo_2.jpg';

import './community-settings.scss';
import Preloader from '../../../components/preloader';
import CommunityImageSettingsForm from '../../../components/forms/community-image-settings-form/CommunityImageSettingsForm';
import CommunityCoverSettingsForm from '../../../components/forms/community-cover-settings-form copy';

const CommunitySettings = (props) => {
  const {
    className,
    community,
    onSendCommunitySettings,
    additionalCommunityData,
    onSendCoverCommunitySettings,
    onSendImagesCommunitySettings
  } = props;

  const {
    id,
    name,
    description,
    avatarImage
  } = community;

  return (
    <>
      {community.length === 0 ?
        <Preloader /> :
        <PageComponent
          className={classNames("community-settings", className)}
          title="Community settings"
        >
          {additionalCommunityData.length === 0 ?
            <Preloader /> :
            <div className="community-settings__container">
              <div className="community-settings__info">
                <p className="community-settings__text">You can change the name of community and the description with avatars.</p>
                <CommunitySettingsForm
                  className="community-settings__text-form"
                  onSubmit={onSendCommunitySettings}
                  initialValues={{
                    name: name,
                    description: description
                  }}
                />
                <div className="community-settings__images-form">
                  <CommunityImageSettingsForm
                    className="community-settings__upload"
                    onSubmit={onSendImagesCommunitySettings}
                  />
                  <CommunityCoverSettingsForm
                    className="community-settings__upload"
                    onSubmit={onSendCoverCommunitySettings}
                  />
                </div>
              </div>
              <ArticleInfo className="community-settings__back-to-page">
                <NavLink
                  to={`${ROUTES.COMMUNITY}/${id}`}
                  className="community-settings__back-to-page-container"
                >
                  <Avatar
                    src={!avatarImage ? noCommunityAvatar : avatarImage}
                    alt={!name ? "Avatar" : name}
                  />
                  <div className="community-settings__back-to-page-info">
                    <h4>{name}</h4>
                    <p className="community-settings__back-to-page-text">back to page</p>
                  </div>
                </NavLink>
              </ArticleInfo>
            </div>
          }
        </PageComponent>}
    </>
  );
}

export default CommunitySettings;

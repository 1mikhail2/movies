import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Search from '../../../components/search';
import ArticleInfo from '../../../components/article-info/ArticleInfo';
import PageComponent from '../../../components/page-components/page-component';
import Button from '../../../components/buttons/main-button';
import CommunityItem from '../../../components/community-items/community-item';
import PopularCommunityItem from '../../../components/community-items/popular-communities';
import CreateCommunityPopup from '../../../components/popups/create-community-popup';
import CreateCommunitySecondStep from '../../../components/popups/create-community-popup/create-community-second-step';

import businessImage from '../../../../assets/images/business.png';
import noCommunityAvatar from '../../../../assets/images/no-photo_2.jpg';

import './communities.scss';
import ROUTES from '../../../constants/routes';
import EmptyListMessage from '../../../components/empty-list-message';

const Communities = (props) => {
  const {
    className,
    onCreateCommunity,
    allCommunities,
    additionalUserData
  } = props;

  const [isOpenCreateCommunityPopup, setIsOpenCreateCommunityPopup] = useState(false);
  const toggleCreateCommunityPopup = () => setIsOpenCreateCommunityPopup(true);

  const closeCreateCommunityPopup = () => setIsOpenCreateCommunityPopup(false);

  const [isOpenBusinessType, setIsOpenBusinessType] = useState(false);
  const toggleBusinessType = () => {
    setIsOpenBusinessType(true);
    setIsOpenCreateCommunityPopup(false);
  }

  const closeBusinessType = () => setIsOpenBusinessType(false);

  const allCommunitiesList = allCommunities.map((community, index) => (
    <CommunityItem
      id={community.id}
      key={index}
      navLink={`${ROUTES.COMMUNITY}/${community.id}`}
      src={!community.avatarImage ? noCommunityAvatar : community.avatarImage}
      alt={!community.name ? "Community" : community.name}
      name={community.name}
      type={community.category}
      followers={`${community.followers} followers`}
    />
  ));

  return (
    <>
      {
        isOpenCreateCommunityPopup &&
        <CreateCommunityPopup
          open={toggleCreateCommunityPopup}
          onRequestClose={closeCreateCommunityPopup}
          toggleType={toggleBusinessType}
        />
      }
      {
        isOpenBusinessType &&
        <CreateCommunitySecondStep
          open={toggleBusinessType}
          onRequestClose={closeBusinessType}
          src={businessImage}
          alt="Business"
          title="Business"
          onCreateCommunity={onCreateCommunity}
        />
      }
      <PageComponent
        className={classNames("communities", className)}
        title="Communities"
      >
        <div className="communities__container">
          <ArticleInfo>
            <div className="communities__header">
              <h4 className="communities__header-title">All communities</h4>
              {additionalUserData.proAccount && <Button caption="Create community" onClick={toggleCreateCommunityPopup} />}
            </div>
            <Search />
            <ul className="communities__list">
              {allCommunitiesList.length === 0 ? <EmptyListMessage /> : allCommunitiesList}
            </ul>
          </ArticleInfo>
          <ArticleInfo>
            <h4>Popular communities</h4>
            <ul className="communities__list">
              <PopularCommunityItem
                navLink="#"
                src="http://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2"
                alt="avatar"
                name="name"
                type="mass media"
              />
              <PopularCommunityItem
                navLink="#"
                src="http://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2"
                alt="avatar"
                name="name"
                type="mass media"
              />
              <PopularCommunityItem
                navLink="#"
                src="http://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2"
                alt="avatar"
                name="name"
                type="mass media"
              />
            </ul>
          </ArticleInfo>
        </div>
      </PageComponent>
    </>
  );
}

export default Communities;

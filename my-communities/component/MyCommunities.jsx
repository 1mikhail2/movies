import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import PageComponent from '../../../components/page-components/page-component';
import ArticleInfoWithTitle from '../../../components/article-info-with-title';
import ShowMoreItem from '../../../components/items/show-more-item/ShowMoreItem';
import EmptyMessage from '../../../components/empty-list-message';

import noCover from '../../../../assets/images/no-cover.png';

import './my-communities.scss';
import Preloader from '../../../components/preloader';

const MyCommunities = (props) => {
  const {
    className,
    allManagedCommunities,
    allFollowingCommunities
  } = props;

  const allManagedCommunitiesList = allManagedCommunities.map((allManagedCommunity, index) => (
    <ShowMoreItem
      id={allManagedCommunity.id}
      key={index}
      className="my-communities__community-item"
      navLink={`${ROUTES.COMMUNITY}/${allManagedCommunity.id}`}
      title={allManagedCommunity.name}
      src={!allManagedCommunity.coverImage ? noCover : allManagedCommunity.coverImage}
      alt={!allManagedCommunity.name ? "Cover" : allManagedCommunity.name}
    />
  ));

  const allFollowingCommunitiesList = allFollowingCommunities.map((allFollowingCommunity, index) => (
    <ShowMoreItem
      id={allFollowingCommunity.Community.id}
      key={index}
      className="my-communities__community-item"
      navLink={`${ROUTES.COMMUNITY}/${allFollowingCommunity.Community.id}`}
      title={allFollowingCommunity.Community.name}
      src={!allFollowingCommunity.Community.coverImage ? noCover : allFollowingCommunity.Community.coverImage}
      alt={!allFollowingCommunity.Community.name ? "Cover" : allFollowingCommunity.Community.name}
    />
  ));

  return (
    <PageComponent
      className={classNames("my-communities", className)}
      title="My communities"
    >
      <div className="my-communities__container">
        <ArticleInfoWithTitle
          title="Followed communities"
          className="my-communities__communities"
        >
          {allFollowingCommunitiesList.length === 0 ? <EmptyMessage className="my-communities__empty-message" /> : allFollowingCommunitiesList}
        </ArticleInfoWithTitle>
        <ArticleInfoWithTitle
          title="Managed communities"
          className="my-communities__communities"
        >
          {allManagedCommunitiesList.length === 0 ? <EmptyMessage className="my-communities__empty-message" /> : allManagedCommunitiesList}
        </ArticleInfoWithTitle>
      </div>
    </PageComponent>
  );
}

export default MyCommunities;

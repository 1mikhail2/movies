import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import ArticleInfo from '../../../components/article-info/ArticleInfo';
import PageComponent from '../../../components/page-components/page-component';
import Image from '../../../components/image';
import Avatar from '../../../components/avatar';
import Icon from '../../../components/icon';
import CommunityAdminItem from '../community-admin-item';
import NoPosts from '../../../components/no-posts';
import ArticleInfoWithTitle from '../../../components/article-info-with-title';
import CommunityUser from '../../../components/community-items/community-user';
import Preloader from '../../../components/preloader';
import Button from '../../../components/buttons/main-button';
import CommunityForm from '../../../components/forms/community-form';
import SecondaryButton from '../../../components/buttons/secondary-button';

import noAvatar from '../../../../assets/images/no-avatar.jpg';
import noCover from '../../../../assets/images/no-cover.png';
import noCommunityAvatar from '../../../../assets/images/no-photo_2.jpg';
import websiteIcon from '../../../../assets/icons/website.svg';
import phoneIcon from '../../../../assets/icons/phone.svg';
import infoIcon from '../../../../assets/icons/info.svg';
import manageIcon from '../../../../assets/icons/settings.svg';
import commentsIcon from '../../../../assets/icons/comment.svg';
import notificationsIcon from '../../../../assets/icons/notifications.svg';

import './community.scss';
import PostItem from '../../../components/post-item';

const Community = (props) => {
  const {
    className,
    community,
    onFollowCommunity,
    isSuccessFollowing,
    followers,
    onUnfollowCommunity,
    userId,
    onSendCommunityPost,
    communityPosts
  } = props;

  const {
    coverImage,
    avatarImage,
    name,
    category,
    User
  } = community;

  const followersList = followers.map((follower, index) => (
    <CommunityUser
      id={follower.id}
      key={index}
      src={!follower.User.avatarImage ? noAvatar : follower.User.avatarImage}
      alt={!follower.User.name ? "Avatar" : follower.User.name}
      navLink={`${ROUTES.PROFILE}/${follower.User.id}`}
      name={follower.User.name}
    />
  ));

  const communityPostsList = communityPosts.map((communityPost, index) => (
    <PostItem
      id={communityPost.Community.id}
      key={index}
      name={communityPost.Community.name}
      date={communityPost.createdAt}
      post={communityPost.post}
      src={!communityPost.Community.avatarImage ? noCommunityAvatar : communityPost.Community.avatarImage}
      alt={!communityPost.Community.name ? "Avatar" : communityPost.Community.name}
    />
  ));

  return (
    <PageComponent
      className={classNames("community", className)}
    >
      {!User ?
        <Preloader /> :
        <>
          <ArticleInfo>
            <div className="community__header">
              <Image
                className="community__backdrop"
                src={!coverImage ? noCover : coverImage}
                alt="Cover"
              />
              <Avatar
                className="community__avatar"
                src={!avatarImage ? noCommunityAvatar : avatarImage}
                alt="Avatar"
              />
            </div>
            <div className="community__info">
              <h2 className="community__title">{name}</h2>
              <div className="community__info-sections">
                <div className="community__info-data-container">
                  <div className="community__info-data">
                    <Icon
                      className="community__icon"
                      glyph={phoneIcon.id}
                      viewBox={phoneIcon.viewBox}
                    />
                    <p>+35354343</p>
                  </div>
                  <div className="community__info-data">
                    <Icon
                      className="community__icon"
                      glyph={infoIcon.id}
                      viewBox={infoIcon.viewBox}
                    />
                    <p>{category}</p>
                  </div>
                  <div className="community__info-data">
                    <Icon
                      className="community__icon"
                      glyph={websiteIcon.id}
                      viewBox={websiteIcon.viewBox}
                    />
                    <p>website</p>
                  </div>
                </div>
                {isSuccessFollowing ?
                  <SecondaryButton
                    className="community__button"
                    caption="Unfollow"
                    onClick={onUnfollowCommunity}
                  /> :
                  <Button
                    className="community__button"
                    caption="Follow"
                    onClick={onFollowCommunity}
                  />
                }
              </div>
            </div>
          </ArticleInfo>
          <div className="community__content">
            <div className="community__side">
              <ArticleInfo className="community__form-container">
                <Avatar
                  src={!avatarImage ? noCommunityAvatar : avatarImage}
                  alt="Avatar"
                />
                <CommunityForm
                  placeholder="What's new?"
                  className="community__form"
                  onSubmit={onSendCommunityPost}
                />
              </ArticleInfo>
              <ArticleInfo className="community__posts">
                {communityPostsList.length === 0 ? <NoPosts /> : communityPostsList}
              </ArticleInfo>
            </div>
            <div className="community__side">
              <ArticleInfo>
                <ul>
                  {userId === community.UserId &&
                    <>
                      <CommunityAdminItem
                        navLink={`${ROUTES.COMMUNITY}/${community.id}/settings`}
                        glyph={manageIcon.id}
                        viewBox={manageIcon.viewBox}
                        title="Manage"
                      />
                      <CommunityAdminItem
                        navLink="#"
                        glyph={commentsIcon.id}
                        viewBox={commentsIcon.viewBox}
                        title="Comments"
                      />
                    </>}
                  <CommunityAdminItem
                    navLink="#"
                    glyph={notificationsIcon.id}
                    viewBox={notificationsIcon.viewBox}
                    title="Notifications"
                  />
                </ul>
              </ArticleInfo>
              {followersList.length !== 0 &&
                <ArticleInfoWithTitle title={`Followers (${followers.length})`}>
                  {followersList}
                </ArticleInfoWithTitle>}
              <ArticleInfoWithTitle title="Admins">
                <CommunityUser
                  src={!User.avatarImage ? noAvatar : User.avatarImage}
                  alt={!User.name ? "Avatar" : User.name}
                  navLink={`${ROUTES.PROFILE}/${User.id}`}
                  name={User.name}
                />
              </ArticleInfoWithTitle>
            </div>
          </div>
        </>}
    </PageComponent>
  );
}

export default Community;

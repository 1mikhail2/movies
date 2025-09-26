import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { reset } from "redux-form";
import withBannedRedirect from '../../../../hoc/isBannedRedirect';
import withAdditionalUserData from '../../../../hoc/withAdditionalUserData';
import {
  getCommunityByIdRequest,
  followCommunityRequest,
  unfollowCommunityRequest,
  sendCommunityAvatarRequest,
  addAdditionalCommunityDataRequest,
  getAdditionalCommunityDataRequest,
  addCommunityPostRequest,
  getCommunityPostsRequest,
  sendCommunityCoverRequest
} from '../../../../redux/community-reducer';
import ROUTES from '../../../constants/routes';
import NotFound from '../../not-found';
import CommunitySettings from '../community-settings';

import Community from '../component';

class CommunityContainer extends React.Component {
  componentDidMount() {
    const {
      getCommunityByIdRequest,
      getAdditionalCommunityDataRequest,
      getCommunityPostsRequest,
      match,
      userId
    } = this.props;

    getCommunityByIdRequest(match.params.id, userId);
    getAdditionalCommunityDataRequest(match.params.id, userId);
    getCommunityPostsRequest(match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id ||
      prevProps.userId !== this.props.userId ||
      prevProps.match !== this.props.match) {
      const {
        getCommunityByIdRequest,
        getAdditionalCommunityDataRequest,
        getCommunityPostsRequest,
        match,
        userId
      } = this.props;

      getCommunityByIdRequest(match.params.id, userId);
      getAdditionalCommunityDataRequest(match.params.id, userId);
      getCommunityPostsRequest(match.params.id);
    }
  }

  onFollowCommunity() {
    const {
      followCommunityRequest,
      match,
      userId
    } = this.props;

    followCommunityRequest(match.params.id, localStorage.getItem('token'), userId);
  }

  onUnfollowCommunity() {
    const {
      unfollowCommunityRequest,
      match,
      userId
    } = this.props;

    unfollowCommunityRequest(match.params.id, localStorage.getItem('token'), userId);
  }

  onSendCommunitySettings(communitySettings) {
    const {
      addAdditionalCommunityDataRequest,
      match,
      userId
    } = this.props;

    const {
      name,
      description
    } = communitySettings;

    addAdditionalCommunityDataRequest(match.params.id, name, description, userId);
  }

  onSendImagesCommunitySettings(CommunityImageSettings) {
    const {
      sendCommunityAvatarRequest,
      match
    } = this.props;

    const formData = new FormData();
    formData.append('avatar', CommunityImageSettings.avatar);

    sendCommunityAvatarRequest(match.params.id, formData);
  }

  onSendCoverCommunitySettings(CommunityCoverSettings) {
    const {
      sendCommunityCoverRequest,
      match
    } = this.props;

    const formCoverData = new FormData();
    formCoverData.append('cover', CommunityCoverSettings.cover);

    sendCommunityCoverRequest(match.params.id, formCoverData);
  }

  onSendCommunityPost(communityPostData, dispatch) {
    const {
      addCommunityPostRequest,
      community
    } = this.props;

    addCommunityPostRequest(community.id, communityPostData.communityPost)
    dispatch(reset("communityPostData"));
  }

  render() {
    return (
      <Switch>
        <Route exact path={`${ROUTES.COMMUNITY}/:id`} render={() => <Community
          {...this.props}
          onFollowCommunity={this.onFollowCommunity.bind(this)}
          onUnfollowCommunity={this.onUnfollowCommunity.bind(this)}
          onSendCommunityPost={this.onSendCommunityPost.bind(this)}
        />} />
        <Route path={`${ROUTES.COMMUNITY}/:id/settings`} render={() => <CommunitySettings
          {...this.props}
          onSendCommunitySettings={this.onSendCommunitySettings.bind(this)}
          onSendImagesCommunitySettings={this.onSendImagesCommunitySettings.bind(this)}
          onSendCoverCommunitySettings={this.onSendCoverCommunitySettings.bind(this)}
        />} />
        <Redirect to="/404" />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    community: state.communities.community,
    isSuccessFollowing: state.communities.isSuccessFollowing,
    followers: state.communities.followers,
    userId: state.auth.userId,
    additionalCommunityData: state.communities.additionalCommunityData,
    communityPosts: state.communities.communityPosts
  }
}

export default compose(
  connect(mapStateToProps, {
    getCommunityByIdRequest,
    followCommunityRequest,
    unfollowCommunityRequest,
    sendCommunityAvatarRequest,
    addAdditionalCommunityDataRequest,
    getAdditionalCommunityDataRequest,
    addCommunityPostRequest,
    getCommunityPostsRequest,
    sendCommunityCoverRequest
  }),
  withBannedRedirect,
  withAdditionalUserData,
  withRouter
)(CommunityContainer);
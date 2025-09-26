import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withBannedRedirect from '../../../../hoc/isBannedRedirect';
import withAdditionalUserData from '../../../../hoc/withAdditionalUserData';
import { createCommunityRequest, getAllCommunitiesRequest } from '../../../../redux/community-reducer';
import ROUTES from '../../../constants/routes';

import Communities from '../component';

class CommunitiesContainer extends React.Component {
  componentDidMount() {
    const {
      getAllCommunitiesRequest
    } = this.props;

    getAllCommunitiesRequest();
  }

  onCreateCommunity(createCommunity) {
    const {
      createCommunityRequest,
    } = this.props;

    const {
      name,
      category,
      website
    } = createCommunity;

    createCommunityRequest(localStorage.getItem('token'), name, category, website);
  }

  componentDidUpdate(prevProps) {
    const {
      history,
      community
    } = this.props;

    if (prevProps.community != this.props.community) {
      history.push(`${ROUTES.COMMUNITY}/${community.id}`);
    }
  }

  render() {
    return (
      <Communities
        {...this.props}
        onCreateCommunity={this.onCreateCommunity.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    community: state.communities.community,
    allCommunities: state.communities.allCommunities,
    additionalUserData: state.users.additionalUserData,
    userId: state.auth.userId
  }
}

export default compose(
  connect(mapStateToProps, {
    createCommunityRequest,
    getAllCommunitiesRequest
  }),
  withBannedRedirect,
  withRouter,
  withAdditionalUserData
)(CommunitiesContainer);
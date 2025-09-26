import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withBannedRedirect from '../../../../hoc/isBannedRedirect';
import withAdditionalUserData from '../../../../hoc/withAdditionalUserData';
import { getAllManagedCommunitiesRequest, getAllFollowingCommunitiesRequest } from '../../../../redux/community-reducer';

import MyCommunities from '../component';

class MyCommunitiesContainer extends React.Component {
  componentDidMount() {
    const {
      getAllManagedCommunitiesRequest,
      getAllFollowingCommunitiesRequest
    } = this.props;

    getAllManagedCommunitiesRequest(localStorage.getItem('token'));
    getAllFollowingCommunitiesRequest(localStorage.getItem('token'));
  }
  render() {
    return (
      <MyCommunities {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allManagedCommunities: state.communities.allManagedCommunities,
    allFollowingCommunities: state.communities.allFollowingCommunities
  }
}

export default compose(
  connect(mapStateToProps, {
    getAllManagedCommunitiesRequest,
    getAllFollowingCommunitiesRequest
  }),
  withBannedRedirect,
  withAdditionalUserData,
  withRouter
)(MyCommunitiesContainer);
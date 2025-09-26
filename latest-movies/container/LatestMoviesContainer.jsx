import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withBannedRedirect from '../../../../hoc/isBannedRedirect';
import withAdditionalUserData from '../../../../hoc/withAdditionalUserData';
import { getLatestMoviesRequest } from '../../../../redux/movies-reducer';

import LatestMovies from '../component';

const mapStateToProps = (state) => {
  return {
    latestMovies: state.movies.latestMovies
  }
}

class LatestMoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getLatestMoviesRequest
    } = this.props;

    getLatestMoviesRequest();
  }

  render() {
    return (
      <LatestMovies {...this.props} />
    );
  }
};

export default compose(
  connect(mapStateToProps, { getLatestMoviesRequest }),
  withBannedRedirect,
  withAdditionalUserData
)(LatestMoviesContainer);
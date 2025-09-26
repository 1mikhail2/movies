import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withBannedRedirect from '../../../../hoc/isBannedRedirect';
import withAdditionalUserData from '../../../../hoc/withAdditionalUserData';
import {
  getTodayTrendingMoviesRequest,
  getTopRatedMoviesRequest,
  getGenresRequest
} from '../../../../redux/movies-reducer';
import { sendWatchLaterRequest } from '../../../../redux/watch-later-reducer';

import Movies from '../component';

class MoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getTodayTrendingMoviesRequest,
      getTopRatedMoviesRequest,
      getGenresRequest
    } = this.props;

    getTodayTrendingMoviesRequest(1);
    getTopRatedMoviesRequest(1);
    getGenresRequest();
  }

  onSendMovieDetails(userId, movieId) {
    const {
      sendWatchLaterRequest
    } = this.props;

    sendWatchLaterRequest(userId, movieId);
  }

  render() {
    return (
      <Movies
        {...this.props}
        onSendMovieDetails={this.onSendMovieDetails.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todayTrendingMovies: state.movies.todayTrendingMovies,
    topRatedMovies: state.movies.topRatedMovies,
    isTopRatedFetching: state.movies.isTopRatedFetching,
    genres: state.movies.genres,
    successSending: state.watchLater.successSending,
    userId: state.auth.userId
  }
}

export default compose(
  connect(mapStateToProps,
    {
      getTodayTrendingMoviesRequest,
      getTopRatedMoviesRequest,
      getGenresRequest,
      sendWatchLaterRequest
    }),
  withBannedRedirect,
  withAdditionalUserData,
  withRouter
)(MoviesContainer);
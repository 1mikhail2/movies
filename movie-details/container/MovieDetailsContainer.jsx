import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getPopularPersonsRequest } from '../../../../redux/persons-reducer';
import {
  getMovieDetailsRequest,
  getRecommendationsRequest,
  getMovieImagesRequest,
  getSimilarMoviesRequest,
  getMoviesKeywordsRequest,
  getMoviesCastRequest,
  getMovieVideosRequest,
  sendFavoriteMovieRequest,
  sendMovieCommentRequest,
  getMovieCommentsRequest,
  getMovieDetailsByUserIdRequest,
  deteleFavoriteMovieByUserIdRequest
} from '../../../../redux/movies-reducer';
import { reset } from "redux-form";
import withBannedRedirect from '../../../../hoc/isBannedRedirect';

import MovieDetails from '../component';
import withAdditionalUserData from '../../../../hoc/withAdditionalUserData';

class MovieDetailsContainer extends React.Component {
  componentDidMount() {
    const {
      getPopularPersonsRequest,
      getMovieDetailsRequest,
      getRecommendationsRequest,
      getMovieImagesRequest,
      getSimilarMoviesRequest,
      getMoviesKeywordsRequest,
      getMoviesCastRequest,
      getMovieVideosRequest,
      getMovieCommentsRequest,
      getMovieDetailsByUserIdRequest,
      userId,
      match
    } = this.props;

    getPopularPersonsRequest(1);
    getMovieDetailsRequest(match.params.id);
    getRecommendationsRequest(match.params.id);
    getMovieImagesRequest(match.params.id);
    getSimilarMoviesRequest(match.params.id);
    getMoviesKeywordsRequest(match.params.id);
    getMoviesCastRequest(match.params.id);
    getMovieVideosRequest(match.params.id);
    getMovieCommentsRequest(match.params.id);
    getMovieDetailsByUserIdRequest(userId, match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const {
        getMovieDetailsRequest,
        getRecommendationsRequest,
        getMovieImagesRequest,
        getSimilarMoviesRequest,
        getMoviesKeywordsRequest,
        getMoviesCastRequest,
        getMovieVideosRequest,
        getMovieCommentsRequest,
        match,
        getMovieDetailsByUserIdRequest,
        userId
      } = this.props;

      getMovieDetailsRequest(match.params.id);
      getRecommendationsRequest(match.params.id);
      getMovieImagesRequest(match.params.id);
      getSimilarMoviesRequest(match.params.id);
      getMoviesKeywordsRequest(match.params.id);
      getMoviesCastRequest(match.params.id);
      getMovieVideosRequest(match.params.id);
      getMovieCommentsRequest(match.params.id);
      getMovieDetailsByUserIdRequest(userId, match.params.id);
    }

    if (prevProps.userId !== this.props.userId) {
      const {
        getMovieDetailsByUserIdRequest,
        userId,
        match
      } = this.props;

      getMovieDetailsByUserIdRequest(userId, match.params.id);
    }
  }

  onSendFavoriteMovie(userId, movieId) {
    const {
      sendFavoriteMovieRequest
    } = this.props;

    sendFavoriteMovieRequest(userId, movieId);
  }

  onDeteleFavoriteMovieByUserId(userId, movieId) {
    const {
      deteleFavoriteMovieByUserIdRequest
    } = this.props;

    deteleFavoriteMovieByUserIdRequest(userId, movieId);
  }

  onSendMovieComment(cinemaComments, dispatch) {
    const {
      sendMovieCommentRequest,
      match
    } = this.props;

    sendMovieCommentRequest(match.params.id, cinemaComments.cinemaComment, localStorage.getItem('token'));
    dispatch(reset("cinemaComments"));
  }

  render() {
    return (
      <MovieDetails
        onSendFavoriteMovie={this.onSendFavoriteMovie.bind(this)}
        onSendMovieComment={this.onSendMovieComment.bind(this)}
        onDeteleFavoriteMovieByUserId={this.onDeteleFavoriteMovieByUserId.bind(this)}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularPersons: state.persons.popularPersons,
    movieDetails: state.movies.movieDetails,
    recommendations: state.movies.recommendations,
    movieImages: state.movies.movieImages,
    similarMovies: state.movies.similarMovies,
    moviesKeywords: state.movies.moviesKeywords,
    moviesCast: state.movies.moviesCast,
    movieVideos: state.movies.movieVideos,
    successSending: state.movies.successSending,
    userId: state.auth.userId,
    isFavoriteMovie: state.movies.isFavoriteMovie,
    movieComments: state.movies.movieComments,
    additionalUserData: state.users.additionalUserData
  }
}

export default compose(
  connect(mapStateToProps, {
    getPopularPersonsRequest,
    getMovieDetailsRequest,
    getRecommendationsRequest,
    getMovieImagesRequest,
    getSimilarMoviesRequest,
    getMoviesKeywordsRequest,
    getMoviesCastRequest,
    getMovieVideosRequest,
    sendFavoriteMovieRequest,
    sendMovieCommentRequest,
    getMovieCommentsRequest,
    getMovieDetailsByUserIdRequest,
    deteleFavoriteMovieByUserIdRequest
  }),
  withBannedRedirect,
  withAdditionalUserData,
  withRouter
)(MovieDetailsContainer);
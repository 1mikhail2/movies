import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Image from '../../../components/image';
import Avatar from '../../../components/avatar';
import ROUTES from '../../../constants/routes';
import SectionInfoSeeAll from '../../../components/section-info/section-info-see-all';
import TrendsItem from '../../../components/trends-item';
import ActorItem from '../../../components/items/actor-item';
import MovieTvItem from '../../../components/items/movie-tv-item';
import Preloader from '../../../components/preloader';
import ErrorMessage from '../../../components/error-message/ErrorMessage';
import DetailItemBackground from '../../../components/detail-item-background';
import DetailItemPoster from '../../../components/detail-item-poster/DetailItemPoster';
import DetailItemSectionList from '../../../components/detail-item-section-list';
import PageWithSuccessMessage from '../../../components/page-components/page-with-success-message';
import CinemaComments from '../../../components/cinema-comments/component';

import noPhoto from '../../../../assets/images/no-photo.png';
import noAvatar from '../../../../assets/images/no-avatar.jpg';

import './movie-details.scss';

const MovieDetails = (props) => {
  const {
    className,
    popularPersons,
    movieDetails,
    recommendations,
    movieImages,
    similarMovies,
    moviesKeywords,
    moviesCast,
    movieVideos,
    onSendFavoriteMovie,
    successSending,
    onSendMovieComment,
    isFavoriteMovie,
    onDeteleFavoriteMovieByUserId,
    userId,
    movieComments,
    additionalUserData
  } = props;

  const popularPersonsList = popularPersons.map((popularPerson, index) => (
    <ActorItem
      id={popularPerson.id}
      key={index}
      navLink={`${ROUTES.PERSON_ITEM}/${popularPerson.id}`}
      className="section-items__item"
      title={popularPerson.name}
      src={`http://image.tmdb.org/t/p/w1280/${popularPerson.profile_path}`}
      alt={popularPerson.name}
      onError={(e) => e.target.src = 'https://static.thenounproject.com/png/156197-200.png'}
    />
  ));

  const productionCompaniesList = movieDetails?.production_companies.map((productionCompany, index) => (
    <MovieTvItem
      id={productionCompany.id}
      key={index}
      title={productionCompany.name}
      src={`http://image.tmdb.org/t/p/w1280${productionCompany.logo_path}`}
      alt={productionCompany.name}
      onError={(e) => e.target.src = noPhoto}
    />
  ));

  const recommendationsList = recommendations.map((recommendation, index) => (
    <li
      className="movie-details__similar-movie-item"
      id={recommendation.id}
      key={index}
    >
      <TrendsItem
        navLink={`${ROUTES.MOVIE_ITEM}/${recommendation.id}`}
        navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${recommendation.id}`}
        name={recommendation.original_title}
        releaseDate={recommendation.release_date}
        src={`http://image.tmdb.org/t/p/w1280${recommendation.backdrop_path}`}
        alt={recommendation.original_title}
        onError={(e) => e.target.src = noPhoto}
      />
    </li>
  ));

  const movieImagesList = movieImages.map((movieImage, index) => (
    <li
      className="movie-details__picture-item"
      id={movieImage.id}
      key={index}
    >
      <Image
        className="movie-details__picture"
        src={`http://image.tmdb.org/t/p/w1280${movieImage.file_path}`}
        alt="Picture of the movie"
        onError={(e) => e.target.src = noPhoto}
      />
    </li>
  ));

  const similarMoviesList = similarMovies.map((similarMovie, index) => (
    <li
      className="movie-details__similar-movie-item"
      id={similarMovie.id}
      key={index}
    >
      <TrendsItem
        navLink={`${ROUTES.MOVIE_ITEM}/${similarMovie.id}`}
        navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${similarMovie.id}`}
        name={similarMovie.original_title}
        releaseDate={similarMovie.release_date}
        src={`http://image.tmdb.org/t/p/w1280${similarMovie.backdrop_path}`}
        alt={similarMovie.original_title}
        onError={(e) => e.target.src = noPhoto}
      />
    </li>
  ));

  const moviesKeywordsList = moviesKeywords.map((moviesKeyword, index) => (
    <li
      className="movie-details__keyword"
      id={moviesKeyword.id}
      key={index}
    >
      {moviesKeyword.name}
    </li>
  ));

  const moviesCastList = moviesCast.map((moviesCastItem, index) => (
    <NavLink
      to={`${ROUTES.PERSON_ITEM}/${moviesCastItem.id}`}
      className="movie-details__actor"
      id={moviesCastItem.id}
      key={index}
    >
      <div className="movie-details__actor-avatar-container">
        <Avatar
          className="movie-details__actor-avatar"
          src={`http://image.tmdb.org/t/p/w1280${moviesCastItem.profile_path}`}
          alt={moviesCastItem.name}
          onError={(e) => e.target.src = noAvatar}
        />
      </div>
      <p>{moviesCastItem.name}</p>
    </NavLink>
  ));

  (!movieDetails?.production_companies) && <Preloader />;

  return (
    <PageWithSuccessMessage
      successSending={successSending}
      message="The movie was successfully added"
    >
      <section className={classNames("movie-details", className)}>
        {!movieDetails ?
          <Preloader /> :
          <>
            <DetailItemBackground
              backgroundImage={movieDetails.backdrop_path}
              title={movieDetails.original_title}
              video={movieVideos}
            />
            <div className="movie-details__container">
              <div className="movie-details__info-wrapper">
                <div className="movie-details__info">
                  <DetailItemPoster
                    budget={movieDetails.budget}
                    language={movieDetails.original_language}
                    overview={movieDetails.overview}
                    posterImage={movieDetails.poster_path}
                    onSendFavoriteMovie={onSendFavoriteMovie}
                    movieDetails={movieDetails}
                    isFavoriteMovie={isFavoriteMovie}
                    onDeteleFavoriteMovieByUserId={onDeteleFavoriteMovieByUserId}
                    userId={userId}
                  >
                    {
                      moviesKeywordsList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{moviesKeywordsList}</>
                    }
                  </DetailItemPoster>
                  <CinemaComments
                    onSendMovieComment={onSendMovieComment}
                    movieComments={movieComments}
                    additionalUserData={additionalUserData}
                  />
                  <SectionInfoSeeAll title="Pictures" navLink={ROUTES.MAIN} className="movie-details__section-info">
                    <ul className="movie-details__pictures-list">
                      {
                        movieImagesList.length === 0 ?
                          <ErrorMessage message="List is empty" /> :
                          <>{movieImagesList}</>
                      }
                    </ul>
                  </SectionInfoSeeAll>
                  <DetailItemSectionList title="Similar movies">
                    {
                      similarMoviesList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{similarMoviesList}</>
                    }
                  </DetailItemSectionList>
                  <DetailItemSectionList title="Production companies">
                    {
                      productionCompaniesList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{productionCompaniesList}</>
                    }
                  </DetailItemSectionList>
                  <DetailItemSectionList title="Recommendations">
                    {
                      recommendationsList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <>{recommendationsList}</>
                    }
                  </DetailItemSectionList>
                  <SectionInfoSeeAll
                    className="section-items"
                    title="Popular persons"
                    navLink={ROUTES.POPULAR_PERSONS}
                  >
                    {popularPersonsList}
                  </SectionInfoSeeAll>
                </div>
              </div>
              <div className="movie-details__cast">
                <h3 className="movie-details__cast-title">Cast</h3>
                {
                  moviesCastList.length === 0 ?
                    <ErrorMessage message="List is empty" /> :
                    <>{moviesCastList}</>
                }
              </div>
            </div>
          </>
        }
      </section>
    </PageWithSuccessMessage>
  );
};

export default MovieDetails;
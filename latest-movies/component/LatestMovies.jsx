import React from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import TrendsItem from '../../../components/trends-item';

import latestMoviesImage from '../../../../assets/images/the_latest.png';
import latestMoviesIcon from '../../../../assets/icons/top-week.svg';
import ShowMorePageItem from '../../../components/show-more-page-item';
import Preloader from '../../../components/preloader';

const LatestMovies = (props) => {
  const {
    latestMovies
  } = props;

  return (
    <ShowMorePageItem
      title="Latest movies"
      showMorePageTitle="Latest movies"
      src={latestMoviesImage}
      alt="Latest movies"
      glyph={latestMoviesIcon.id}
      viewBox={latestMoviesIcon.viewBox}
    >
      <TrendsItem
        id={latestMovies.id}
        navLink={`${ROUTES.MOVIE_ITEM}/${latestMovies.id}`}
        navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${latestMovies.id}`}
        name={latestMovies.original_title}
        releaseDate={latestMovies.release_date}
        src={`http://image.tmdb.org/t/p/w1280/${latestMovies.backdrop_path}`}
        alt={latestMovies.original_title}
      />
    </ShowMorePageItem>
  );
};

export default LatestMovies;
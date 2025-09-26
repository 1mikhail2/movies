import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import Image from '../../../components/image';
import Preloader from '../../../components/preloader';
import TrendsItem from '../../../components/trends-item';
import ErrorMessage from '../../../components/error-message';
import PageWithSuccessMessage from '../../../components/page-components/page-with-success-message';
import FavoriteStarFilled from '../../../components/favorite-star/favorite-star-filled';
import FavoriteStarOutlined from '../../../components/favorite-star/favorite-star-outlined';
import ArticleInfo from '../../../components/article-info';

import noAvatar from '../../../../assets/images/no-avatar.jpg';

import './person-details.scss';

const PersonDetails = (props) => {
  const {
    className,
    personDetails,
    personMovieCredits,
    onSendFavoritePerson,
    successSending,
    userId,
    isFavoritePerson,
    onDeteleFavoritePersonByUserId
  } = props;

  const alsoKnownAsList = (!personDetails?.also_known_as) ?
    <Preloader /> :
    personDetails?.also_known_as.map((alsoKnownAsItem, index) => (
      <div
        id={alsoKnownAsItem.id}
        key={index}
      >{alsoKnownAsItem}</div>
    ));

  const personMovieCreditsList = personMovieCredits.map((personMovieCredit, index) => (
    <TrendsItem
      id={personMovieCredit.id}
      key={index}
      navLink={`${ROUTES.MOVIE_ITEM}/${personMovieCredit.id}`}
      navPlayButtonLink={`${ROUTES.MOVIE_ITEM}/${personMovieCredit.id}`}
      name={personMovieCredit.original_title}
      src={`http://image.tmdb.org/t/p/w1280${personMovieCredit.backdrop_path}`}
      alt={!personMovieCredit.original_title ? "Cover movie" : personMovieCredit.original_title}
    />
  ));

  return (
    <PageWithSuccessMessage
      successSending={successSending}
      message="The person was successfully added"
    >
      <section className={classNames("person-details", className)}>
        <div className="person-details__container">
          {
            !personDetails ?
              <Preloader /> :
              <div className="person-details__person">
                <div className="person-details__contacts">
                  <ArticleInfo className="person-details__contacts-article">
                    <div className="person-details__contacts-wrapper">
                      <div className="person-details__avatar-container">
                        <Image
                          className="person-details__avatar"
                          src={`http://image.tmdb.org/t/p/w1280${personDetails.profile_path}`}
                          alt={!personDetails.name ? "Avatar" : personDetails.name}
                          onError={(e) => e.target.src = noAvatar}
                        />
                      </div>
                      <div className="person-details__favorite-container">
                        {
                          isFavoritePerson ?
                            <FavoriteStarFilled onClick={() => onDeteleFavoritePersonByUserId(userId, personDetails.id)} /> :
                            <FavoriteStarOutlined onClick={() => onSendFavoritePerson(userId, personDetails.id)} />
                        }
                      </div>
                    </div>
                  </ArticleInfo>
                  <ArticleInfo>
                    <h3>Personal info</h3>
                    <h4 className="person-details__quaternary-title">Known For</h4>
                    {
                      !personDetails.known_for_department ?
                        <ErrorMessage message="We don't know any information" /> :
                        <p>{personDetails.known_for_department}</p>
                    }
                    <h4 className="person-details__quaternary-title">Gender</h4>
                    {
                      personDetails.gender === 1 ?
                        <p>Female</p> :
                        <p>Male</p>
                    }
                    <h4 className="person-details__quaternary-title">Birthday</h4>
                    {
                      !personDetails.birthday ?
                        <ErrorMessage message="We don't know the birthday" /> :
                        <p>{personDetails.birthday}</p>
                    }
                    <h4 className="person-details__quaternary-title">Place of Birth</h4>
                    {
                      !personDetails.place_of_birth ?
                        <ErrorMessage message="We don't know the place of birth" /> :
                        <p>{personDetails.place_of_birth}</p>
                    }
                    <h4 className="person-details__quaternary-title">Also Known As</h4>
                    {
                      alsoKnownAsList.length === 0 ?
                        <ErrorMessage message="List is empty" /> :
                        <div className="person-details__list-text">
                          {alsoKnownAsList}
                        </div>
                    }
                  </ArticleInfo>
                </div>
                <div className="person-details__main-info">
                  <ArticleInfo>
                    <h2>{personDetails.name}</h2>
                    <h3>Biography</h3>
                    <div className="person-details__biography">
                      {
                        !personDetails.biography ?
                          <ErrorMessage message="Biography is empty" /> :
                          <>{personDetails.biography}</>
                      }
                    </div>
                  </ArticleInfo>
                  <div className="person-details__known-for">
                    <h3>Known For</h3>
                    <div className="person-details__known-for-info">
                      {
                        personMovieCreditsList.length === 0 ?
                          <ErrorMessage message="List is empty" /> :
                          <>{personMovieCreditsList}</>
                      }
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>
      </section>
    </PageWithSuccessMessage>
  );
};

export default PersonDetails;
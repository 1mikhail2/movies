import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withBannedRedirect from '../../../../hoc/isBannedRedirect';
import withAdditionalUserData from '../../../../hoc/withAdditionalUserData';
import {
  getPersonDetailsRequest,
  getPersonMovieCreditsRequest,
  sendFavoritePersonRequest,
  getPersonDetailsByUserIdRequest,
  deteleFavoritePersonByUserIdRequest
} from '../../../../redux/persons-reducer';

import PersonDetails from '../component';

class PersonDetailsContainer extends React.Component {
  componentDidMount() {
    const {
      getPersonDetailsRequest,
      getPersonMovieCreditsRequest,
      getPersonDetailsByUserIdRequest,
      match
    } = this.props;

    getPersonDetailsRequest(match.params.id);
    getPersonMovieCreditsRequest(match.params.id);
    getPersonDetailsByUserIdRequest(match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const {
        getPersonDetailsByUserIdRequest,
        match,
        userId
      } = this.props;

      getPersonDetailsByUserIdRequest(userId, match.params.id);
    }

    if (prevProps.userId !== this.props.userId) {
      const {
        getPersonDetailsByUserIdRequest,
        userId,
        match
      } = this.props;

      getPersonDetailsByUserIdRequest(userId, match.params.id);
    }
  }

  onSendFavoritePerson(userId, personId) {
    const {
      sendFavoritePersonRequest
    } = this.props;

    sendFavoritePersonRequest(userId, personId);
  }

  onDeteleFavoritePersonByUserId(userId, personId) {
    const {
      deteleFavoritePersonByUserIdRequest
    } = this.props;

    deteleFavoritePersonByUserIdRequest(userId, personId);
  }

  render() {
    return (
      <PersonDetails
        {...this.props}
        onSendFavoritePerson={this.onSendFavoritePerson.bind(this)}
        onDeteleFavoritePersonByUserId={this.onDeteleFavoritePersonByUserId.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personDetails: state.persons.personDetails,
    personMovieCredits: state.persons.personMovieCredits,
    successSending: state.persons.successSending,
    userId: state.auth.userId,
    isFavoritePerson: state.persons.isFavoritePerson
  }
}

export default compose(
  connect(mapStateToProps, {
    getPersonDetailsRequest,
    getPersonMovieCreditsRequest,
    sendFavoritePersonRequest,
    getPersonDetailsByUserIdRequest,
    deteleFavoritePersonByUserIdRequest
  }),
  withBannedRedirect,
  withAdditionalUserData,
  withRouter
)(PersonDetailsContainer);
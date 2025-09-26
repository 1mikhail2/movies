import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withBannedRedirect from '../../../../hoc/isBannedRedirect';
import withAdditionalUserData from '../../../../hoc/withAdditionalUserData';
import { addCoinsRequest } from '../../../../redux/users-reducer';

import BuyCoins from '../component';

class BuyCoinsContainer extends React.Component {
  onAddCoins() {
    const {
      addCoinsRequest
    } = this.props;

    addCoinsRequest(localStorage.getItem('token'));
  }

  render() {
    return (
      <BuyCoins
        {...this.props}
        onAddCoins={this.onAddCoins.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    successSending: state.users.successSending,
    userId: state.auth.userId,
    additionalUserData: state.users.additionalUserData
  }
}

export default compose(
  connect(mapStateToProps, {
    addCoinsRequest
  }),
  withBannedRedirect,
  withAdditionalUserData,
  withRouter
)(BuyCoinsContainer);
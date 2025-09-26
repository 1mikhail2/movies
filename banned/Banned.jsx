import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import withUnbannedRedirect from '../../../hoc/isUnbannedRedirect';

import Icon from '../../components/icon';
import PageComponent from '../../components/page-components/page-component';

import banIcon from '../../../assets/icons/ban.svg';

import './banned.scss';

const Banned = () => {
  return (
    <PageComponent
      className="banned"
    >
      <div className="banned__container">
        <Icon
          className="banned__icon"
          glyph={banIcon.id}
          viewBox={banIcon.viewBox}
        />
        <h2>You've been banned!</h2>
        <p>It'll be a good lesson for you.</p>
      </div>
    </PageComponent>
  );
};

export default compose(withUnbannedRedirect)(Banned);
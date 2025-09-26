import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { compose } from 'redux';
import withBannedRedirect from '../../../hoc/isBannedRedirect';
import withAdditionalUserData from '../../../hoc/withAdditionalUserData';

import PageComponentNoTitle from '../../components/page-components/page-component-no-title';
import Logo from '../../components/logo';
import Button from '../../components/buttons/main-button';
import Image from '../../components/image';
import LinkButton from '../../components/buttons/link-button';

import mainWindow from '../../../assets/images/main.jpg';

import './main.scss';

const Main = () => {
  return (
    <PageComponentNoTitle
      className="main"
    >
      <div className="main__info-container">
        <div className="main__info">
          <Logo className="main__logo" />
          <h3 className="main__title">Discover new movies every day.</h3>
          <p className="main__text">Get movies and TV shows. You can watch as much as you want, whenever you want.</p>
          <NavLink className="main__try-it-free" to={ROUTES.LOGIN}>
            <Button caption="Try it free" />
          </NavLink>
          <LinkButton navLink={ROUTES.MAIN}>Learn more</LinkButton>
        </div>
        <div>
          <Image className="main__image" src={mainWindow} alt="Main window" />
        </div>
      </div>
    </PageComponentNoTitle>
  );
};

export default compose(withBannedRedirect, withAdditionalUserData)(Main);
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Icon from '../../../components/icon';

import './community-admin-item.scss';

const CommunityAdminItem = (props) => {
  const {
    title,
    navLink,
    ...restProps
  } = props;

  return (
    <NavLink
      to={navLink}
      className="community-admin-item"
    >
      <Icon
        className="community__icon"
        {...restProps}
      />
      <p>{title}</p>
    </NavLink>
  );
}

export default CommunityAdminItem;

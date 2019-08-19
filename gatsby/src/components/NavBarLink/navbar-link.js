import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './navbar-link.styles';

const NavBarLink = ({ to, title }) => <NavLink to={to}>{title}</NavLink>;

NavBarLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavBarLink;

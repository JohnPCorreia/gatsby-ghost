import React from 'react';
import PropTypes from 'prop-types';

import { COLOR_SCHEMA } from '../../../../../constants/styles/main';

import ChevronBase from './styles';

const Chevron = ({ handleClick, direction, className, isVisible, chevronColor }) => {
  const composeName = `chevron-${direction}`;

  return (
    <ChevronBase
      className={`${className} chevron`}
      chevronColor={chevronColor}
      direction={direction}
      isVisible={isVisible}
      name={composeName}
      onClick={handleClick}
    />
  );
};

Chevron.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  chevronColor: PropTypes.string,
  isVisible: PropTypes.bool,
};

Chevron.defaultProps = {
  chevronColor: COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE,
  className: '',
  isVisible: true,
};

export default Chevron;

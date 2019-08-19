import React from 'react';
import PropTypes from 'prop-types';

import { COLOR_SCHEMA } from '../../../../../constants/styles/main';

import * as CardUtility from './carousel-utility';
import Progress from './carousel-progress-styles';

const CardProgress = ({ barColor, className, totalDataCount, position, viewSize }) => {
  const totalSteps = totalDataCount / viewSize;
  const barHandleSize = CardUtility.calculateBarHandleSize(viewSize, totalDataCount);
  const steps = position < totalSteps ? position : totalSteps;
  const barHandlePosition = CardUtility.calculateBarHandlePosition(
    viewSize,
    totalDataCount,
    barHandleSize,
    steps,
  );

  return (
    <Progress className={`${className} progress-line`}>
      <Progress.track className="progress-track">
        <Progress.bar
          barColor={barColor}
          className="progress-bar"
          barSize={barHandleSize}
          barPosition={barHandlePosition}
        />
      </Progress.track>
    </Progress>
  );
};

CardProgress.propTypes = {
  barColor: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.number,
  totalDataCount: PropTypes.number,
  viewSize: PropTypes.number,
};

CardProgress.defaultProps = {
  barColor: COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE,
  className: '',
  position: 1,
  totalDataCount: 3,
  viewSize: 3,
};

export default CardProgress;

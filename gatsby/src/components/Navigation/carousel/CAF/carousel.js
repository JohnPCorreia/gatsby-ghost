import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { COLOR_SCHEMA } from '../../../../constants/styles/main';

import CarouselStyled from './carousel-styles';

class Carousel extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]).isRequired,
    handleLeftClick: PropTypes.func.isRequired,
    handleRightClick: PropTypes.func.isRequired,
    totalDataCount: PropTypes.number.isRequired,
    viewIndex: PropTypes.number.isRequired,
    className: PropTypes.string,
    colorTheme: PropTypes.string,
    hideProgress: PropTypes.bool,
    viewLimit: PropTypes.number,
  };

  static defaultProps = {
    className: '',
    colorTheme: COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE,
    hideProgress: false,
    viewLimit: 3,
  };

  render() {
    const {
      children,
      className,
      colorTheme,
      data,
      handleLeftClick,
      handleRightClick,
      hideProgress,
      totalDataCount,
      viewIndex,
      viewLimit,
    } = this.props;
    const maxIndex = Math.ceil(totalDataCount / viewLimit);
    let correctedIndex = viewIndex - 1;
    correctedIndex = viewIndex < maxIndex ? correctedIndex : maxIndex - 1;
    let sliceAt = correctedIndex * viewLimit;
    sliceAt = sliceAt <= 0 ? 0 : sliceAt;
    const endSlice = sliceAt + viewLimit;
    const carouselItems = _.slice([...data], sliceAt, endSlice);

    return (
      <CarouselStyled className={`${className} carousel`}>
        <CarouselStyled.mainContainer className="main-container">
          <CarouselStyled.contentContainer className="content">
            <CarouselStyled.leftChevron
              chevronColor={colorTheme}
              className="chevron left-chevron"
              direction="left"
              handleClick={handleLeftClick}
              isVisible={viewIndex > 1}
            />
            <CarouselStyled.itemContainer className="content-items">
              {children(carouselItems)}
            </CarouselStyled.itemContainer>
            <CarouselStyled.rightChevron
              chevronColor={colorTheme}
              className="chevron right-chevron"
              direction="right"
              handleClick={handleRightClick}
              isVisible={viewIndex < maxIndex}
            />
          </CarouselStyled.contentContainer>
          {!hideProgress && (
            // Class names: progress-line << progress-bar
            <CarouselStyled.progress
              barColor={colorTheme}
              position={viewIndex}
              totalDataCount={totalDataCount}
              viewSize={viewLimit}
            />
          )}
        </CarouselStyled.mainContainer>
      </CarouselStyled>
    );
  }
}

export default Carousel;

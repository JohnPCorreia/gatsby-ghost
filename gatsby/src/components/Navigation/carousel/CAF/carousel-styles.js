import styled from 'styled-components';

import { COLOR_SCHEMA } from '../../../../constants/styles/main';

import Chevron from './Chevron/chevron';
import CardProgress from './Carousel-progress/carousel-progress';

const Carousel = styled.div`
  width: 100%;
  overflow: hidden;
  .slick-track {
    transform: translate3d(0px, 0px, 0px) !important;
  }
`;

Carousel.mainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

Carousel.contentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
Carousel.itemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
Carousel.leftChevron = styled(Chevron)``;
Carousel.rightChevron = styled(Chevron)``;

Carousel.progress = styled(CardProgress)`
  background-color: ${COLOR_SCHEMA.UTILITY.GREY};
  overflow: hidden;
  .progress-bar {
    background-color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  }
`;

export default Carousel;

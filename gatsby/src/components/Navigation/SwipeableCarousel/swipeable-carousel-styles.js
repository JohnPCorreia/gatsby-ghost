import styled, { css } from "styled-components"
import { COLOR_SCHEMA, SIZE } from "../../../constants/styles/main"
import CarouselProgress from "../carousel/CAF/Carousel-progress/carousel-progress"

const progressBarSize = css`
  @media (min-width: 330px) {
    width: 305px;
  }
  @media (min-width: 835px) {
    width: 630px;
  }
  @media (min-width: 1165px) {
    width: 965px;
  }
`
const dynamicContentContainerSize = css`
  @media (min-width: 330px) {
    width: 335px !important;
  }
  @media (min-width: 835px) {
    width: 670px !important;
  }
  @media (min-width: 1165px) {
    width: 1000px !important;
  }
`

const Carousel = styled.div`
  .slick-carousel {
    ${dynamicContentContainerSize};
    width: 1000px;
  }
  .slick-carousel .chevron {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    color: ${COLOR_SCHEMA.BASIC.WHITE};
    border-color: ${COLOR_SCHEMA.BASIC.WHITE};
  }
  .chevron-right {
    right: -75px;
  }
  .chevron-left {
    left: -75px;
  }
  .slick-track {
    margin: 0;
  }
`

Carousel.carouselProgress = styled(CarouselProgress)`
  margin: ${SIZE.NORMAL_AND_HALF} auto;
  ${progressBarSize};
  .progress-line {
    background-color: transparent;
  }
  .progress-track {
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .progress-bar {
    background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  }
`

export default Carousel

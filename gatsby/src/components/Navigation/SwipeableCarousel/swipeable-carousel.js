import React, { Component } from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import Slick from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { COLOR_SCHEMA } from "../../../constants/styles/main"
import Carousel from "./swipeable-carousel-styles"

import Chevron from "./Chevron/chevron"

function NextArrow(props) {
  //eslint-disable-next-line
  const { handleClick, totalDataCount, viewLimit, viewIndex } = props
  const maxIndex = Math.ceil(totalDataCount / viewLimit)
  return (
    <Chevron
      className="chevron-right"
      direction="right"
      handleClick={() => handleClick()}
      colorTheme={COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE}
      isVisible={viewIndex < maxIndex}
    />
  )
}
function PreviousArrow(props) {
  //eslint-disable-next-line
  const { handleClick, viewIndex } = props
  return (
    <Chevron
      className={"chevron-left"}
      direction="left"
      handleClick={handleClick}
      colorTheme={COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE}
      isVisible={viewIndex > 1}
    />
  )
}

class SwipeableCarousel extends Component {
  static propTypes = {
    breakPoints: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    cardIndex: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired,
    handleOnSlideChange: PropTypes.func.isRequired,
    raiseList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    totalRaises: PropTypes.number.isRequired,
    cardType: PropTypes.string,
    className: PropTypes.string,
    hideProgress: PropTypes.bool,
    infinite: PropTypes.bool,
    initialSlide: PropTypes.number,
    lazyLoad: PropTypes.bool,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    viewLimit: PropTypes.number,
  }
  static defaultProps = {
    cardType: "recommended",
    className: "slick-carousel",
    draggable: false,
    initialSlide: 0,
    hideProgress: false,
    infinite: false,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    viewLimit: 3,
  }

  constructor(props) {
    super(props)

    this.state = {
      raises: props.raiseList,
    }
    this.handleOnSlideChange = this.handleOnSlideChange.bind(this)
    this.handleArrowClick = this.handleArrowClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { cardType, totalRaises, viewLimit } = this.props
    if (!_.isEqual(nextProps.viewLimit, viewLimit)) {
      this.handleOnSlideChange(cardType, totalRaises, nextProps.viewLimit)()
    }
    this.setState({
      raises: nextProps.raiseList,
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props)
  }

  handleOnSlideChange(cardType, totalRaises, viewLimit) {
    return () => {
      const slide =
        Math.ceil(this.slider.innerSlider.state.currentSlide / viewLimit) + 1
      this.props.handleOnSlideChange(cardType, slide, totalRaises)
    }
  }

  handleArrowClick(viewIndex, incrementBy, direction) {
    const { viewLimit } = this.props

    let slideTo = viewIndex * viewLimit

    if (direction === "left") {
      slideTo -= viewLimit * 2
    }
    this.slider.slickGoTo(slideTo)
  }

  render() {
    const {
      breakPoints,
      className,
      children,
      // draggable,
      hideProgress,
      totalRaises,
      cardIndex,
      cardType,
      viewLimit,
      infinite,
      initialSlide,
      slidesToShow,
      slidesToScroll,
      lazyLoad,
    } = this.props
    const { raises } = this.state

    return (
      <Carousel>
        <Slick
          infinite={infinite}
          initialSlide={initialSlide}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          lazyLoad={lazyLoad}
          className={className}
          afterChange={this.handleOnSlideChange(
            cardType,
            totalRaises,
            viewLimit
          )}
          responsive={breakPoints}
          ref={slider => (this.slider = slider)}
          nextArrow={
            <NextArrow
              totalDataCount={totalRaises}
              viewLimit={viewLimit}
              viewIndex={cardIndex}
              handleClick={() => this.handleArrowClick(cardIndex, 1, "right")}
            />
          }
          prevArrow={
            <PreviousArrow
              totalDataCount={totalRaises}
              viewLimit={viewLimit}
              viewIndex={cardIndex}
              handleClick={() => this.handleArrowClick(cardIndex, -1, "left")}
            />
          }
        >
          {children(raises)}
        </Slick>
        {!hideProgress && (
          <Carousel.carouselProgress
            totalDataCount={totalRaises}
            position={cardIndex}
            viewSize={viewLimit}
          />
        )}
      </Carousel>
    )
  }
}

export default SwipeableCarousel

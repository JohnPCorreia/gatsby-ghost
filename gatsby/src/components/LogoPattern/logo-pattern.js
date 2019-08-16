import React, { Component } from "react"
import PropTypes from "prop-types"
import ContainerDims from "react-container-dimensions"
import _ from "lodash"

export default class LogoPattern extends Component {
  constructor() {
    super()
    this.state = {}
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps, this.props)
  }

  isSafari() {
    return (
      navigator.userAgent.indexOf("Safari") !== -1 &&
      navigator.userAgent.indexOf("Chrome") === -1
    )
  }

  render() {
    const { givenWidth, givenHeight /*, full*/ } = this.props
    const ratio = 20 / 26 // Height/Width // 0.769

    return (
      <ContainerDims>
        {({ height, width }) => {
          let rectWidth = 0
          let rectHeight = 0

          if (givenWidth) {
            rectWidth = givenWidth * width
            rectHeight = givenWidth * width * ratio
          } else if (givenHeight) {
            rectWidth = (givenHeight * height) / ratio
            rectHeight = givenHeight * height
          }
          // this width and height are directly from correctly show website
          rectWidth = this.isSafari() ? 206 : rectWidth
          rectHeight = this.isSafari() ? 160 : rectHeight

          return (
            <svg height={height} width={width}>
              <defs>
                <clipPath id="logoPattern-mainclip">
                  <rect x={0} y={0} height={40} width={26} />
                </clipPath>
                <clipPath id="logoPattern-clip">
                  <path
                    d={`M 0,0 L ${rectWidth},${0} L ${0},${rectHeight} Z`}
                  />
                </clipPath>

                <pattern
                  id="logoPattern"
                  height={40}
                  width={26}
                  patternUnits="userSpaceOnUse"
                >
                  <g
                    clipPath="url(#logoPattern-mainclip)"
                    style={{
                      stroke: this.props.color,
                      strokeWidth: "0.65px",
                      fill: "transparent",
                    }}
                  >
                    <g id="logo">
                      <g id="standard" transform="translate(5, 12)">
                        <path d="M15.46,6.69,9.31.54a1.86,1.86,0,0,0-2.62,0L5.57,1.66l-5,5a1.86,1.86,0,0,0,0,2.62l6.15,6.15a1.86,1.86,0,0,0,2.62,0l.77-.78h0l5.38-5.37A1.86,1.86,0,0,0,15.46,6.69ZM8.87,15a1.23,1.23,0,0,1-1.74,0L1,8.87A1.23,1.23,0,0,1,1,7.13L5.92,2.19,7.57,3.83,3.4,8l2.52,2.52,1.65,1.64,2.08,2.09ZM5.92,9.65,4.27,8,8,4.27,9.65,5.92Zm4.16-3.3L11.73,8,8,11.73,6.35,10.08ZM15,8.87l-4.94,4.94L8.44,12.16,12.6,8,10.08,5.48,8.44,3.83,6.35,1.75,7.13,1A1.23,1.23,0,0,1,8.87,1L15,7.13A1.23,1.23,0,0,1,15,8.87Z" />
                      </g>
                      <g id="leftTop" transform="translate(-8, 2)">
                        <path d="M15.46,6.69,9.31.54a1.86,1.86,0,0,0-2.62,0L5.57,1.66l-5,5a1.86,1.86,0,0,0,0,2.62l6.15,6.15a1.86,1.86,0,0,0,2.62,0l.77-.78h0l5.38-5.37A1.86,1.86,0,0,0,15.46,6.69ZM8.87,15a1.23,1.23,0,0,1-1.74,0L1,8.87A1.23,1.23,0,0,1,1,7.13L5.92,2.19,7.57,3.83,3.4,8l2.52,2.52,1.65,1.64,2.08,2.09ZM5.92,9.65,4.27,8,8,4.27,9.65,5.92Zm4.16-3.3L11.73,8,8,11.73,6.35,10.08ZM15,8.87l-4.94,4.94L8.44,12.16,12.6,8,10.08,5.48,8.44,3.83,6.35,1.75,7.13,1A1.23,1.23,0,0,1,8.87,1L15,7.13A1.23,1.23,0,0,1,15,8.87Z" />
                      </g>
                      <g id="leftBottom" transform="translate(-8, 22)">
                        <path d="M15.46,6.69,9.31.54a1.86,1.86,0,0,0-2.62,0L5.57,1.66l-5,5a1.86,1.86,0,0,0,0,2.62l6.15,6.15a1.86,1.86,0,0,0,2.62,0l.77-.78h0l5.38-5.37A1.86,1.86,0,0,0,15.46,6.69ZM8.87,15a1.23,1.23,0,0,1-1.74,0L1,8.87A1.23,1.23,0,0,1,1,7.13L5.92,2.19,7.57,3.83,3.4,8l2.52,2.52,1.65,1.64,2.08,2.09ZM5.92,9.65,4.27,8,8,4.27,9.65,5.92Zm4.16-3.3L11.73,8,8,11.73,6.35,10.08ZM15,8.87l-4.94,4.94L8.44,12.16,12.6,8,10.08,5.48,8.44,3.83,6.35,1.75,7.13,1A1.23,1.23,0,0,1,8.87,1L15,7.13A1.23,1.23,0,0,1,15,8.87Z" />
                      </g>
                      <g id="rightTop" transform="translate(18, 2)">
                        <path d="M15.46,6.69,9.31.54a1.86,1.86,0,0,0-2.62,0L5.57,1.66l-5,5a1.86,1.86,0,0,0,0,2.62l6.15,6.15a1.86,1.86,0,0,0,2.62,0l.77-.78h0l5.38-5.37A1.86,1.86,0,0,0,15.46,6.69ZM8.87,15a1.23,1.23,0,0,1-1.74,0L1,8.87A1.23,1.23,0,0,1,1,7.13L5.92,2.19,7.57,3.83,3.4,8l2.52,2.52,1.65,1.64,2.08,2.09ZM5.92,9.65,4.27,8,8,4.27,9.65,5.92Zm4.16-3.3L11.73,8,8,11.73,6.35,10.08ZM15,8.87l-4.94,4.94L8.44,12.16,12.6,8,10.08,5.48,8.44,3.83,6.35,1.75,7.13,1A1.23,1.23,0,0,1,8.87,1L15,7.13A1.23,1.23,0,0,1,15,8.87Z" />
                      </g>
                      <g id="rightBottom" transform="translate(18, 22)">
                        <path d="M15.46,6.69,9.31.54a1.86,1.86,0,0,0-2.62,0L5.57,1.66l-5,5a1.86,1.86,0,0,0,0,2.62l6.15,6.15a1.86,1.86,0,0,0,2.62,0l.77-.78h0l5.38-5.37A1.86,1.86,0,0,0,15.46,6.69ZM8.87,15a1.23,1.23,0,0,1-1.74,0L1,8.87A1.23,1.23,0,0,1,1,7.13L5.92,2.19,7.57,3.83,3.4,8l2.52,2.52,1.65,1.64,2.08,2.09ZM5.92,9.65,4.27,8,8,4.27,9.65,5.92Zm4.16-3.3L11.73,8,8,11.73,6.35,10.08ZM15,8.87l-4.94,4.94L8.44,12.16,12.6,8,10.08,5.48,8.44,3.83,6.35,1.75,7.13,1A1.23,1.23,0,0,1,8.87,1L15,7.13A1.23,1.23,0,0,1,15,8.87Z" />
                      </g>
                      <g id="top" transform="translate(5, -8)">
                        <path d="M15.46,6.69,9.31.54a1.86,1.86,0,0,0-2.62,0L5.57,1.66l-5,5a1.86,1.86,0,0,0,0,2.62l6.15,6.15a1.86,1.86,0,0,0,2.62,0l.77-.78h0l5.38-5.37A1.86,1.86,0,0,0,15.46,6.69ZM8.87,15a1.23,1.23,0,0,1-1.74,0L1,8.87A1.23,1.23,0,0,1,1,7.13L5.92,2.19,7.57,3.83,3.4,8l2.52,2.52,1.65,1.64,2.08,2.09ZM5.92,9.65,4.27,8,8,4.27,9.65,5.92Zm4.16-3.3L11.73,8,8,11.73,6.35,10.08ZM15,8.87l-4.94,4.94L8.44,12.16,12.6,8,10.08,5.48,8.44,3.83,6.35,1.75,7.13,1A1.23,1.23,0,0,1,8.87,1L15,7.13A1.23,1.23,0,0,1,15,8.87Z" />
                      </g>
                      <g id="bottom" transform="translate(5, 32)">
                        <path d="M15.46,6.69,9.31.54a1.86,1.86,0,0,0-2.62,0L5.57,1.66l-5,5a1.86,1.86,0,0,0,0,2.62l6.15,6.15a1.86,1.86,0,0,0,2.62,0l.77-.78h0l5.38-5.37A1.86,1.86,0,0,0,15.46,6.69ZM8.87,15a1.23,1.23,0,0,1-1.74,0L1,8.87A1.23,1.23,0,0,1,1,7.13L5.92,2.19,7.57,3.83,3.4,8l2.52,2.52,1.65,1.64,2.08,2.09ZM5.92,9.65,4.27,8,8,4.27,9.65,5.92Zm4.16-3.3L11.73,8,8,11.73,6.35,10.08ZM15,8.87l-4.94,4.94L8.44,12.16,12.6,8,10.08,5.48,8.44,3.83,6.35,1.75,7.13,1A1.23,1.23,0,0,1,8.87,1L15,7.13A1.23,1.23,0,0,1,15,8.87Z" />
                      </g>
                    </g>
                  </g>
                </pattern>
              </defs>

              {this.props.topLeft ? (
                <g transform={`translate(${0},${0})`}>
                  <g transform={"scale(1,1)"}>
                    <rect
                      clipPath={"url(#logoPattern-clip)"}
                      fill={"url(#logoPattern)"}
                      x={0}
                      y={0}
                      height={rectHeight}
                      width={rectWidth}
                    />
                  </g>
                </g>
              ) : null}

              {this.props.bottomLeft ? (
                <g transform={`translate(${0},${height})`}>
                  <g transform={"scale(1,-1)"}>
                    <rect
                      clipPath={"url(#logoPattern-clip)"}
                      fill={"url(#logoPattern)"}
                      x={0}
                      y={0}
                      height={rectHeight}
                      width={rectWidth}
                    />
                  </g>
                </g>
              ) : null}

              {this.props.topRight ? (
                <g transform={`translate(${width},${0})`}>
                  <g transform={"scale(-1,1)"}>
                    <rect
                      clipPath={"url(#logoPattern-clip)"}
                      fill={"url(#logoPattern)"}
                      x={0}
                      y={0}
                      height={rectHeight}
                      width={rectWidth}
                    />
                  </g>
                </g>
              ) : null}

              {this.props.bottomRight ? (
                <g transform={`translate(${width},${height})`}>
                  <g transform={"scale(-1,-1)"}>
                    <rect
                      clipPath={"url(#logoPattern-clip)"}
                      fill={"url(#logoPattern)"}
                      x={0}
                      y={0}
                      height={rectHeight}
                      width={rectWidth}
                    />
                  </g>
                </g>
              ) : null}

              {this.props.full ? (
                <g transform={`translate(${0},${0})`}>
                  <g transform={"scale(1,1)"}>
                    <rect
                      fill={"url(#logoPattern)"}
                      x={0}
                      y={0}
                      height={height}
                      width={width}
                    />
                  </g>
                </g>
              ) : null}
            </svg>
          )
        }}
      </ContainerDims>
    )
  }
}

LogoPattern.defaultProps = {
  color: "black",
  givenHeight: 0.33,
  givenWidth: null,
  topLeft: false,
  topRight: false,
  bottomLeft: false,
  bottomRight: false,
  full: false,
}

LogoPattern.propTypes = {
  color: PropTypes.string.isRequired,
  givenHeight: PropTypes.number,
  givenWidth: PropTypes.number,
  topLeft: PropTypes.bool,
  topRight: PropTypes.bool,
  bottomLeft: PropTypes.bool,
  bottomRight: PropTypes.bool,
  full: PropTypes.bool,
}

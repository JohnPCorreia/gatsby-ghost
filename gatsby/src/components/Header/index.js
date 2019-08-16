import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from 'gatsby'
import "./index.css"

const rectWidth = 362
const rectHeight = 48
const ratio = 3 / 18

const defaultState = {
  invest: false,
  raiseFunds: false,
  aboutUs: false,
  profile: false,
}

const Header = ({ siteTitle }) => {
  const [state, setState] = useState({
    submenu: defaultState,
  })
  return (
    <header>
      <nav>
        <section className="nav-logo-wrap">
          <Link to="/" >
          <div className="nav-logo-clip-wrap">
            <svg height="48" width="362">
              <defs>
                <clipPath id="nav-clip">
                  <rect x={0} y={0} height={40} width={26} />
                </clipPath>
                <clipPath id="nav-bar-clip">
                  <path
                    d={`M 0,0 L ${rectWidth *
                      (1 -
                        ratio)},0 L ${rectWidth},${rectHeight} ${0},${rectHeight} Z`}
                  />
                </clipPath>

                <pattern
                  id="pattern-nav"
                  height={40}
                  width={26}
                  patternUnits="userSpaceOnUse"
                >
                  <g
                    clipPath="url(#nav-clip)"
                    style={{
                      stroke: "#fff",
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

              <g clipPath={"url(#nav-bar-clip)"}>
                <rect
                  x={0}
                  y={0}
                  height={rectHeight}
                  width={rectWidth}
                  style={{ fill: "#000" }}
                />

                <rect
                  // clipPath={"url(#clip)"}
                  fill={"url(#pattern-nav)"}
                  x={0}
                  y={0}
                  height={rectHeight}
                  width={rectWidth}
                  style={{ opacity: "0.2" }}
                />
              </g>
            </svg>
            <div
              className="erd_scroll_detection_container erd_scroll_detection_container_animation_active"
              style={{
                visibility: "hidden",
                display: "inline",
                width: "0px",
                height: "0px",
                zIndex: "-1",
                overflow: "hidden",
                margin: "0px",
                padding: "0px",
              }}
            >
              <div
                dir="ltr"
                className="erd_scroll_detection_container"
                style={{
                  position: "absolute",
                  flex: "0 0 auto",
                  overflow: "hidden",
                  zIndex: "-1",
                  visibility: "hidden",
                  width: "100%",
                  height: "100%",
                  left: "0px",
                  top: "0px",
                }}
              >
                <div
                  className="erd_scroll_detection_container"
                  style={{
                    position: "absolute",
                    flex: "0 0 auto",
                    overflow: "hidden",
                    zIndex: "-1",
                    visibility: "hidden",
                    left: "-1px",
                    top: "-1px",
                    right: "0px",
                    bottom: "0px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      flex: "0 0 auto",
                      overflow: "scroll",
                      zIndex: "-1",
                      visibility: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        width: "373px",
                        height: "59px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      flex: "0 0 auto",
                      overflow: "scroll",
                      zIndex: "-1",
                      visibility: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "200%",
                        height: "200%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="nav-logo">
            <svg width="213" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fillRule="nonzero" fill="none">
                <path fill="none" d="M0 0h56v56H0z"></path>
                <path
                  d="M54.11 23.429a6.47 6.47 0 0 1 0 9.139l-21.539 21.54A6.42 6.42 0 0 1 28.001 56a6.42 6.42 0 0 1-4.569-1.893l-21.54-21.54A6.42 6.42 0 0 1 0 28a6.42 6.42 0 0 1 1.893-4.57l21.54-21.54a6.47 6.47 0 0 1 9.138 0l21.54 21.54-.001-.001z"
                  fill="#1B1F23"
                ></path>
                <path
                  d="M62.08 21.08h10.555v3.484h-6.938v2.878h5.87v3.483h-5.87v4.338h-3.616V21.081l-.001-.001zm18.203 7.76c0 1.856.89 2.961 2.57 2.961 1.7 0 2.609-1.148 2.609-2.983v-7.737h3.795v8.03c0 3.42-2.293 6.36-6.404 6.36-4.092 0-6.365-2.669-6.365-6.36v-8.03h3.795v7.759zm17.57-1.377v7.8H94.06V21.081h3.28l6.108 7.821v-7.821h3.795v14.182h-3.281l-6.108-7.8h-.001zm14.389-6.382h6.245c3.973.02 6.938 2.503 6.938 7.112 0 4.567-2.965 7.07-6.938 7.07h-6.245V21.081zm3.795 3.462v7.258h2.292c1.898 0 3.182-1.314 3.182-3.608 0-2.336-1.284-3.65-3.182-3.65h-2.292zm20.14-3.67c3.972 0 6.937 3.128 6.937 7.32 0 4.15-2.965 7.279-6.938 7.279-3.933 0-6.898-3.129-6.898-7.279 0-4.192 2.965-7.32 6.898-7.32h.001zm0 12.555c2.865 0 4.9-2.253 4.9-5.235 0-3.024-2.035-5.256-4.9-5.256-2.827 0-4.883 2.232-4.883 5.256 0 2.982 2.056 5.235 4.882 5.235h.001zm11.897-12.347h6.107c2.57 0 4.783 1.606 4.783 5.068 0 3.129-2.213 4.985-4.783 4.985h-4.052v4.13h-2.055V21.08v.001zm2.055 1.898v6.256h3.736c1.64 0 2.964-1.167 2.964-3.086 0-2.106-1.324-3.17-2.964-3.17h-3.736zm19.528-2.107c3.972 0 6.937 3.129 6.937 7.321 0 4.15-2.965 7.279-6.937 7.279-3.934 0-6.898-3.129-6.898-7.279 0-4.192 2.964-7.32 6.898-7.32v-.001zm0 12.556c2.866 0 4.901-2.253 4.901-5.235 0-3.024-2.035-5.256-4.901-5.256-2.827 0-4.882 2.232-4.882 5.256 0 2.982 2.055 5.235 4.882 5.235zm11.897 1.835V21.081h2.056v12.284h7.352v1.898h-9.408zm13.657 0V21.081h2.056v14.182h-2.056zm7.63-3.108c.908.605 2.51 1.315 4.268 1.315 1.957 0 3.3-.793 3.3-2.19 0-1.001-.691-1.565-2.331-1.982l-2.412-.625c-2.253-.564-3.36-1.836-3.36-3.692 0-2.232 1.64-4.088 5.199-4.088 1.877 0 3.695.563 4.703 1.126l-.593 2.003c-.948-.605-2.688-1.126-4.19-1.126-2.095 0-2.984.833-2.984 1.897 0 .98.632 1.46 1.858 1.815l2.609.71c2.371.666 3.636 1.792 3.636 3.794 0 2.628-2.293 4.36-5.474 4.36-1.937 0-3.874-.71-4.724-1.23l.494-2.087h.001z"
                  fill="#DCE8E4"
                ></path>
                <path fill="none" d="M0 0h56v56H0z"></path>
                <path
                  d="M52.657 25.128L30.87 3.341a4.064 4.064 0 0 0-5.74 0l-2.87 2.87 6.501 6.5 7.263 7.263 8.024 8.024-14.525 14.525 5.74 5.74 17.394-17.395a4.032 4.032 0 0 0 1.19-2.87 4.032 4.032 0 0 0-1.19-2.87"
                  fill="#379DAB"
                ></path>
                <path
                  d="M28 14.996L14.998 27.998l5.74 5.74 13.001-13.003L28 14.996zM28 41l13.002-13.002-5.74-5.74-13.001 13.003L28 41z"
                  fill="#DCE8E4"
                ></path>
                <path
                  d="M27.238 43.285l-7.262-7.263-8.024-8.024 14.525-14.525-5.74-5.74L3.344 25.128a4.03 4.03 0 0 0-1.189 2.87 4.03 4.03 0 0 0 1.189 2.87L25.13 52.656a4.063 4.063 0 0 0 5.74 0l2.87-2.87-6.502-6.501z"
                  fill="#0F4C59"
                ></path>
              </g>
            </svg>
          </span>
          </Link>
        </section>
        <section className="nav-content-wrap">
          <div className="nav-content-desktop">
            <div
              className="nav-content-item-wrap"
              onClick={() => {
                const { invest } = state.submenu
                setState({
                  submenu: {
                    ...defaultState,
                    invest: !invest,
                  },
                })
              }}
            >
              <div>
                <p>Invest</p>
              </div>
              {state.submenu.invest && (
                <ul className="nav-content-item-dropdown">
                  <a href="https://prod.fundopolis.com/faq#funder">
                    Funder FAQ
                  </a>
                  <a href="#">Funder Journey</a>
                  <a href="https://prod.fundopolis.com/invested">
                    List of Raises
                  </a>
                </ul>
              )}
            </div>
            <div
              className="nav-content-item-wrap"
              onClick={() => {
                const { raiseFunds } = state.submenu
                setState({
                  submenu: {
                    ...defaultState,
                    raiseFunds: !raiseFunds,
                  },
                })
              }}
            >
              <div>
                <p>Raise Funds</p>
              </div>
              {state.submenu.raiseFunds && (
                <ul className="nav-content-item-dropdown">
                  <a href="https://prod.fundopolis.com/faq#issuer">
                    Issuer FAQ
                  </a>
                  <a href="#">Issuer Journey</a>
                  <a href="https://prod.fundopolis.com/wizard">Start a Raise</a>
                </ul>
              )}
            </div>
            <div
              className="nav-content-item-wrap"
              onClick={() => {
                const { aboutUs } = state.submenu
                setState({
                  submenu: {
                    ...defaultState,
                    aboutUs: !aboutUs,
                  },
                })
              }}
            >
              <div>
                <p>About Us</p>
              </div>
              {state.submenu.aboutUs && (
                <ul className="nav-content-item-dropdown">
                  <a href="https://prod.fundopolis.com/aboutus#story">
                    Our Story
                  </a>
                  <a href="https://prod.fundopolis.com/aboutus#works">
                    How it Works
                  </a>
                  <a href="https://prod.fundopolis.com/aboutus#team">
                    Meet the team
                  </a>
                  <a href="https://prod.fundopolis.com/aboutus#vision">
                    Our Vision
                  </a>
                </ul>
              )}
            </div>
            <div
              className="nav-content-item-wrap"
              onClick={() => {
                const { profile } = state.submenu
                setState({
                  submenu: {
                    ...defaultState,
                    profile: !profile,
                  },
                })
              }}
            >
              <button>Login/Sign Up</button>
              {state.submenu.profile}
            </div>
          </div>
          <div className="nav-content-mobile">
            <div className="nav-content-mobile-inner">
              <svg name="menu" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.71 3h20.58A1.61 1.61 0 0 0 24 1.5 1.61 1.61 0 0 0 22.29 0H1.71A1.62 1.62 0 0 0 0 1.5 1.62 1.62 0 0 0 1.71 3zm20.58 4H1.71A1.62 1.62 0 0 0 0 8.5 1.62 1.62 0 0 0 1.71 10h20.58A1.61 1.61 0 0 0 24 8.5 1.61 1.61 0 0 0 22.29 7zm0 7H1.71A1.62 1.62 0 0 0 0 15.5 1.62 1.62 0 0 0 1.71 17h20.58A1.61 1.61 0 0 0 24 15.5a1.61 1.61 0 0 0-1.71-1.5z"></path>
              </svg>
            </div>
          </div>
        </section>
      </nav>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

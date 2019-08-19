import React, { Component } from "react"
import _ from "lodash"
// import withWidth, { isWidthDown } from "material-ui/utils/withWidth"
import NavBarPattern from "../NavBarPattern/nav-bar-pattern"
import Logo from "../../images/logos/index"
import {
  NavBarContainer,
  NavBarLogo,
  LogoWrapper,
  NavBarContent,
  NavBarIcon,
  NavBarDialogContent,
} from "./nav-bar.styles"

import NavBarDialog from "./components/NavBarDialog/nav-bar-dialog"
import NavBarDropdown from "../NavBarDropdown/navbar-dropdown"
// import NavBarProfile from "../NavBarProfile/navbar-profile"

const NAV_BAR_TRANS = {
  // en: {
  BREWPOT: "Brewpot",
  FUNDOPOLIS_LOGO: "Fundopolis Logo",
  PROFILE: "Profile",
  INVEST: {
    NAME: "Invest",
    FUNDER_FAQ: "Funder FAQ",
    FUNDER_JOURNEY: "Funer Journey",
    RAISE_LIST: "List of Raises",
  },
  EDUCATION: "Education",
  RAISE: {
    NAME: "Raise Funds",
    ISSUER_FAQ: "Issuer FAQ",
    ISSUER_JOURNEY: "Issuer Journey",
    START_RAISE: "Start a Raise",
  },
  ABOUT: {
    NAME: "About Us",
    STORY: "Our Story",
    HOW_IT_WORKS: "How it Works",
    MEET_TEAM: "Meet the team",
    VISION: "Our Vision",
    EDUCATION: "Education",
  },
  LOGIN: "Login/Sign Up",
  CITIZEN: {
    CITIZEN_PORTAL: "My Citizen Portal",
    COMPANY_PORTAL: "My Company Portal(s)",
    SETTINGS: "Account Settings",
  },
  NOT_CITIZEN: {
    JOIN: "Become a citizen",
    CHANGE_PASSWORD: "Change Password",
  },
  // },
}

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      invest: {
        items: [
          {
            title: NAV_BAR_TRANS.INVEST.FUNDER_FAQ,
            url: "https://prod.fundopolis.com/faq#funder",
          },
          {
            title: NAV_BAR_TRANS.INVEST.FUNDER_JOURNEY,
            url: "https://prod.fundopolis.com/#",
          },
          {
            title: NAV_BAR_TRANS.INVEST.RAISE_LIST,
            url: "https://prod.fundopolis.com/invested",
          },
        ],
        isOpen: false,
      },
      raise: {
        items: [
          {
            title: NAV_BAR_TRANS.RAISE.ISSUER_FAQ,
            url: "https://prod.fundopolis.com/faq#issuer",
          },
          {
            title: NAV_BAR_TRANS.RAISE.ISSUER_JOURNEY,
            url: "https://prod.fundopolis.com/#",
          },
          {
            title: NAV_BAR_TRANS.RAISE.START_RAISE,
            external: true,
            url: "https://prod.fundopolis.com/wizard",
          },
        ],
        isOpen: false,
      },
      about: {
        items: [
          {
            title: NAV_BAR_TRANS.ABOUT.STORY,
            url: "https://prod.fundopolis.com/aboutus#story",
          },
          {
            title: NAV_BAR_TRANS.ABOUT.HOW_IT_WORKS,
            url: "https://prod.fundopolis.com/aboutus#works",
          },
          {
            title: NAV_BAR_TRANS.ABOUT.MEET_TEAM,
            url: "https://prod.fundopolis.com/aboutus#team",
          },
          {
            title: NAV_BAR_TRANS.ABOUT.VISION,
            url: "https://prod.fundopolis.com/aboutus#vision",
          },
          {
            title: NAV_BAR_TRANS.ABOUT.EDUCATION,
            url: "https://prod.fundopolis.com/faq#education",
          },
        ],
        isOpen: false,
      },
      citizen: {
        items: [
          {
            title: NAV_BAR_TRANS.CITIZEN.CITIZEN_PORTAL,
            url: `https://prod.fundopolis.com/citizen/quicklinks?citizen=${this.props.userID}`,
            submenu: [],
          },
          // {
          //   title: NAV_BAR_TRANS.CITIZEN.COMPANY_PORTAL,
          //   url: '/citizen',
          //   submenu: [
          //     {
          //       title: 'Pepes Pizza',
          //       url: '#',
          //     },
          //     {
          //       title: 'Jo Jos ice cream',
          //       url: '#',
          //     },
          //     {
          //       title: 'Add a company',
          //       url: '#',
          //     },
          //   ],
          // },
          {
            title: NAV_BAR_TRANS.CITIZEN.SETTINGS,
            url: `https://prod.fundopolis.com/citizen/settings?citizen=${this.props.userID}`,
            submenu: [],
          },
        ],
      },
      notCitizen: {
        items: [
          {
            title: NAV_BAR_TRANS.NOT_CITIZEN.JOIN,
            url: "https://prod.fundopolis.com/citizen/createcitizen",
            submenu: [],
          },
          {
            title: NAV_BAR_TRANS.NOT_CITIZEN.CHANGE_PASSWORD,
            url: `https://prod.fundopolis.com/citizen/settings?citizen=${this.props.userID}`,
            submenu: [],
          },
        ],
      },
      displayMobileNav: false,
    }

    this.handleExternalToggle = this.handleExternalToggle.bind(this)
    this.handleClickLogo = this.handleClickLogo.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleExternalToggle, false)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userID !== this.props.userID) {
      this.setState({
        ...this.state,
        citizen: {
          items: [
            {
              title: NAV_BAR_TRANS.CITIZEN.CITIZEN_PORTAL,
              url: `https://prod.fundopolis.com/citizen/quicklinks?citizen=${nextProps.userID}`,
              submenu: [],
            },
            // {
            //   title: NAV_BAR_TRANS.CITIZEN.COMPANY_PORTAL,
            //   url: `/citizen/quicklinks?citizen=${nextProps.userID}`,
            //   submenu: [
            //     {
            //       title: 'Add a company',
            //       url: '#',
            //     },
            //   ],
            // },
            {
              title: NAV_BAR_TRANS.CITIZEN.SETTINGS,
              url: `https://prod.fundopolis.com/citizen/settings?citizen=${nextProps.userID}`,
              submenu: [],
            },
          ],
        },
        notCitizen: {
          items: [
            {
              title: NAV_BAR_TRANS.NOT_CITIZEN.JOIN,
              url: "https://prod.fundopolis.com/citizen/createcitizen",
              submenu: [],
            },
            {
              title: NAV_BAR_TRANS.NOT_CITIZEN.CHANGE_PASSWORD,
              url: `https://prod.fundopolis.com/citizen/settings?citizen=${nextProps.userID}`,
              submenu: [],
            },
          ],
        },
      })
    }
  }

  shouldComponentUpdate(nextState) {
    return !_.isEqual(nextState, this.state)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleExternalToggle, false)
  }

  handleToggleNavBarDropdown(section = null) {
    const oldState = { ...this.state }
    const keys = _.keys(oldState)

    _.forEach(keys, key => {
      // Don't close the current section - leave that for the toggling after
      if (!_.isEqual(key, section) && !_.isEqual(key, "displayMobileNav")) {
        oldState[key].isOpen = false
      }
    })

    const newState = { ...oldState }
    newState[section].isOpen = !oldState[section].isOpen

    this.setState(newState)
  }

  handleExternalToggle(event = null) {
    if (event && _.isEqual(event.key, "Escape")) {
      const currOpen = _.findKey(this.state, { isOpen: true })

      this.setState({
        ...this.state,
        [currOpen]: {
          ...this.state[currOpen],
          isOpen: false,
        },
      })
    }
  }

  handleClickLogo(event) {
    event.preventDefault()
    this.props.history.push("/")
  }

  onMobileNav = () => {
    this.setState({
      ...this.state,
      displayMobileNav: !this.state.displayMobileNav,
    })
  }

  compareWidth = () => false // isWidthDown("sm", this.props.width)

  onClickLink = key => (...args) => {
    console.log("onClickLink", key, args)
    const oldState = { ...this.state }
    oldState.displayMobileNav = false

    oldState[key].isOpen = false

    this.setState(oldState)
  }

  renderNavContent = () => (
    <NavBarContent>
      <NavBarDropdown
        handleSubmenu={() => this.handleToggleNavBarDropdown("invest")}
        isOpen={this.state.invest.isOpen}
        name={NAV_BAR_TRANS.INVEST.NAME}
        submenu={this.state.invest.items}
        isMobile={this.compareWidth()}
        onClickLink={this.onClickLink("invest")}
      />
      <NavBarDropdown
        handleSubmenu={() => this.handleToggleNavBarDropdown("raise")}
        isOpen={this.state.raise.isOpen}
        name={NAV_BAR_TRANS.RAISE.NAME}
        submenu={this.state.raise.items}
        isMobile={this.compareWidth()}
        onClickLink={this.onClickLink("raise")}
      />
      <NavBarDropdown
        handleSubmenu={() => this.handleToggleNavBarDropdown("about")}
        isOpen={this.state.about.isOpen}
        name={NAV_BAR_TRANS.ABOUT.NAME}
        submenu={this.state.about.items}
        isMobile={this.compareWidth()}
        onClickLink={this.onClickLink("about")}
      />
      <NavBarProfile
        handleSubmenu={() => this.handleToggleNavBarDropdown("citizen")}
        isOpen={this.state.citizen.isOpen}
        avatar={this.props.avatar}
        isLoading={this.props.isLoading}
        logged={this.props.loggedIn}
        authenticate
        textButton={NAV_BAR_TRANS.LOGIN}
        menuAuthenticate={this.state.citizen.items}
        menuNotAuthenticate={this.state.notCitizen.items}
        isMobile={this.compareWidth()}
        onClickLink={this.onClickLink("citizen")}
      />
    </NavBarContent>
  )

  renderMobileNav = () => (
    <NavBarDialog
      fullScreen
      open={this.state.displayMobileNav && this.compareWidth()}
      onClose={this.onMobileNavClose}
    >
      <NavBarDialogContent>
        <NavBarDialogContent.closeWrapper>
          <NavBarDialogContent.close
            name="close"
            height={36}
            width={36}
            onClick={this.onMobileNav}
          />
        </NavBarDialogContent.closeWrapper>
        {this.renderNavContent()}
      </NavBarDialogContent>
    </NavBarDialog>
  )

  render() {
    return (
      <NavBarContainer>
        <NavBarLogo onClick={this.handleClickLogo}>
          <div
            style={{
              width: this.compareWidth() ? "275px" : "362px",
              height: "48px",
            }}
          >
            <NavBarPattern
              color={"white"}
              backgroundColor={"black"}
              patternOpacity={0.2}
            />
          </div>
          <LogoWrapper
            style={{ left: this.compareWidth() ? "15px" : undefined }}
          >
            <Logo name="navbar-fundopolis" />
          </LogoWrapper>
        </NavBarLogo>
        {this.compareWidth() ? (
          <NavBarIcon.wrapper onClick={this.onMobileNav}>
            <NavBarIcon name="menu" />
          </NavBarIcon.wrapper>
        ) : (
          this.renderNavContent()
        )}

        {this.renderMobileNav()}
      </NavBarContainer>
    )
  }
}

NavBar.defaultProps = {}

NavBar.propTypes = {}

export default NavBar // withWidth()() //withRouter(NavBar))

import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { withStyles } from "material-ui/styles"
// import { withRouter } from "react-router-dom"

import Checkbox from "material-ui/Checkbox"

// import compose from "recompose/compose"

import * as Auth from "../../utils/auth"

import { COLOR_SCHEMA } from "../../constants/styles/main"
import FormLoginStyled from "./form-login.styles"

const styles = {
  default: {
    color: COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE,
    width: "16px",
    height: "16px",
    "&$checked": {
      color: COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE,
      backgroundColor: COLOR_SCHEMA.BASIC.WHITE,
    },
  },
  checked: {},
}

export class FormLogin extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      keepLogged: true,
      showPassword: true,
      buttonTitle: "Login",
      errorMessage: "",
      buttonDisabled: true,
      email: "",
      password: "",
    }

    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleForgotPassword = this.handleForgotPassword.bind(this)
    this.handleKeepLogged = this.handleKeepLogged.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  componentWillMount() {
    document.addEventListener("keydown", this.onPressEnter)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onPressEnter)
  }

  onPressEnter = event => {
    if (event.code === "Enter") {
      if (this.state.showPassword) {
        this.handleLogin()
      } else {
        this.handleForgotPassword()
      }
    }
  }

  onInputChange(key) {
    return event => {
      const result = { ...this.state }
      result[key] = event.target.value

      result.buttonDisabled = result.showPassword
        ? !(result.password.length > 2 && result.email.length > 2)
        : !(result.email.length > 2)

      this.setState(result)
    }
  }

  handleSignUp() {
    this.props.closeMenu()
    // this.props.history.push('/citizen/createcitizen');
  }

  handleLogin() {
    if (this.state.showPassword) {
      Auth.login(
        this.state.email,
        this.state.password,
        this.state.keepLogged,
        err => {
          const errMsgs = {
            invalid_request: "Please check your credentials and try again.",
            access_denied: "Please check your credentials and try again.",
          }

          if (err) {
            this.setState({
              ...this.state,
              errorMessage: errMsgs[err.code],
            })
          }
        }
      )
    } else {
      Auth.forgotPassword(this.state.email)
    }
  }

  handleForgotPassword() {
    this.setState({
      ...this.state,
      showPassword: false,
      buttonTitle: "Change Password",
    })
  }

  handleKeepLogged() {
    this.setState(prevState => ({
      keepLogged: !prevState.keepLogged,
    }))
  }

  returnToLogin = () => {
    this.setState({
      ...this.state,
      showPassword: true,
      buttonTitle: "Login",
    })
  }

  render() {
    const { keepLogged } = this.state
    const { classes } = this.props

    return (
      <FormLoginStyled className={"form-login"}>
        <FormLoginStyled.body>
          <FormLoginStyled.input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onInputChange("email")}
          />
          {this.state.showPassword ? (
            <FormLoginStyled.input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onInputChange("password")}
            />
          ) : null}

          {this.state.errorMessage ? (
            <FormLoginStyled.error>
              {this.state.errorMessage}
            </FormLoginStyled.error>
          ) : null}

          {this.state.showPassword ? (
            <FormLoginStyled.forgotPassword
              grey
              onClick={this.handleForgotPassword}
            >
              Forgot your password
            </FormLoginStyled.forgotPassword>
          ) : (
            <FormLoginStyled.forgotPassword grey onClick={this.returnToLogin}>
              Return to login
            </FormLoginStyled.forgotPassword>
          )}

          <FormLoginStyled.buttonLogin
            disabled={this.state.buttonDisabled}
            title={this.state.buttonTitle}
            buttonType="PRIMARY_XLARGE"
            clickCallback={this.handleLogin}
          />
          {this.state.showPassword ? (
            <FormLoginStyled.field onClick={this.handleKeepLogged}>
              <Checkbox
                checked={keepLogged}
                classes={{
                  checked: classes.checked,
                  // root: classes.default,
                }}
              />
              <FormLoginStyled.label>Keep me logged in</FormLoginStyled.label>
            </FormLoginStyled.field>
          ) : null}
        </FormLoginStyled.body>
        <FormLoginStyled.footer>
          <FormLoginStyled.paragraph>
            <FormLoginStyled.text>New to Fundopolis?</FormLoginStyled.text>
            <FormLoginStyled.link
              href="https://prod.fundopolis.com/citizen/createcitizen"
              onClick={this.handleSignUp}
            >
              Sign up!
            </FormLoginStyled.link>
          </FormLoginStyled.paragraph>
        </FormLoginStyled.footer>
      </FormLoginStyled>
    )
  }
}

FormLogin.defaultProps = {
  classes: {},
}

FormLogin.propTypes = {
  classes: PropTypes.shape(),
}

export default withStyles(styles)(FormLogin) // withRouter(FormLogin))

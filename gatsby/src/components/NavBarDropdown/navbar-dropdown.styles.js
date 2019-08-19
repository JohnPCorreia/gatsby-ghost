import styled from "styled-components"

import { PADDING, FONT_SIZE, SIZE } from "../../constants/styles/main"
import * as text from "../../constants/styles/text"
import { FADE_IN } from "../../constants/styles/animations"
import COLORS from "./constants/navbar-drodown.colors"

const NavDropdown = styled.section`
  ${props => (props.isMobile ? "width: 80%" : null)};
  margin-right: 32px;
`

NavDropdown.mobile = styled.section`
  width: 100%;
`

NavDropdown.mobile.item = styled.a`
  font-size: 1rem;
  color: ${COLORS.DROPDOWN_TEXT};
  text-decoration: none;
  margin-left: 16px;
  margin-bottom: 16px;
`

NavDropdown.menu = styled.p`
  ${text.SMALL_TEXT};
  color: inherit;
  cursor: pointer;
`

NavDropdown.accordionTitle = styled.section`
  width: 100%;
  font-size: ${FONT_SIZE.FONT_18PX};
  color: ${COLORS.ACCORDION_TEXT};
`

NavDropdown.submenu = styled.ul`
  ${text.SMALL_TEXT};
  list-style: none;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  margin-top: ${SIZE.LARGE};
  animation: ${FADE_IN} 400ms linear;
  z-index: 10;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: auto;
    left: 10px;
    top: -10px;
    width: 0;
    border-width: 0 10px 10px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.7) transparent;
  }
`

NavDropdown.item = styled.a`
  ${text.MARGINAL_TEXT};
  display: block;
  padding: ${PADDING.NORMAL};
  color: ${COLORS.DROPDOWN_TEXT};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${COLORS.DROPDOWN_HOVER};
    background-color: rgba(0, 0, 0, 0.4);
    transition: color 200ms linear, background-color 200ms linear;
  }
`

NavDropdown.itemExternal = styled.a`
  ${text.MARGINAL_TEXT};
  display: block;
  padding: ${PADDING.NORMAL};
  color: ${COLORS.DROPDOWN_TEXT};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${COLORS.DROPDOWN_HOVER};
    background-color: rgba(0, 0, 0, 0.4);
    transition: color 200ms linear, background-color 200ms linear;
  }
`

export default NavDropdown

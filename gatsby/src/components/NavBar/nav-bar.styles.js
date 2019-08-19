import styled from "styled-components"

import Icon from "../../images/icons/index"
import { SIZE } from "../../constants/styles/main"
import COLORS from "./constants/nav-bar.colors"

export const NavBarContainer = styled.nav`
  width: 100%;
  min-height: 48px;
  background-color: ${COLORS.BACKGROUND};
  display: flex;
  justify-content: space-between;
`

export const NavBarLogo = styled.section`
  cursor: pointer;
`

export const LogoWrapper = styled.span`
  position: absolute;
  top: 4px;
  left: 42px;
  z-index: 10;
  width: 216px;
  height: 56px;
  object-fit: contain;
`

export const NavBarContent = styled.section`
  /* max-width: 400px; */
  color: ${COLORS.TEXT};
  margin-right: ${SIZE.NORMAL_AND_HALF};
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: flex-end;

  ${props => {
    if (props.width) {
      return `
          width: 100%;

          margin-right: 0px;

          flex-direction: column;
          justify-content: center;
          align-items: center;
        `
    }

    return null
  }}
`

export const NavBarDialogContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`

NavBarDialogContent.closeWrapper = styled.section`
  width: 100%;
`

NavBarDialogContent.close = styled(Icon)`
  fill: ${COLORS.ICONS};

  float: right;

  margin-right: 24px;
  margin-top: 12px;
`

export const NavBarIcon = styled(Icon)`
  fill: ${COLORS.ICONS};

  height: 24px;
  width: 24px;
`

NavBarIcon.wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 5px;

  margin-top: 8px;
  margin-right: 24px;

  height: 32px;
  width: 48px;

  border: 1px solid ${COLORS.ICONS};
  border-radius: 3px;
`

import styled from "styled-components"
import FontAwesome from "react-fontawesome"
import { FONT_SIZE } from "../../../../constants/styles/main"

export const ChevronWrapper = styled.div`
  .chevron {
    border: 1px solid ${props => props.chevronColor};
    color: ${props => props.chevronColor};
  }
`
const ChevronBase = styled(FontAwesome)`
  align-content: center;
  align-items: center;
  align-self: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 39px;
  justify-content: center;
  min-width: 39px;
  position: relative;
  width: 39px;
  &::before {
    font-family: 'Material Icons';
    content: '${props => (props.direction === "left" ? "\\e314" : "\\e315")}';
    font-size: ${FONT_SIZE.FONT_28PX};
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  }
`

export default ChevronBase

import styled from "styled-components"
import Checkbox from "material-ui/Checkbox"
import { COLOR_SCHEMA, SIZE, PADDING } from "../../constants/styles/main"
import * as text from "../../constants/styles/text"
import Button from "../Button/button"

const FormLoginStyled = styled.section``

FormLoginStyled.input = styled.input`
  ${text.SMALL_TEXT};
  width: 100%;
  height: 40px;
  border-radius: 3px;
  margin-bottom: ${SIZE.NORMAL};
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  color: ${COLOR_SCHEMA.BASIC.BLACK};
  padding: ${PADDING.NORMAL} ${PADDING.HALF};

  &::placeholder {
    ${Text.SMALL_TEXT};
    color: ${COLOR_SCHEMA.UTILITY.DARK_GREY};
  }

  &:focus {
    border: 2px solid ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  }
`

FormLoginStyled.text = styled.span`
  ${text.SMALL_TEXT};
  color: ${props =>
    props.grey
      ? `${COLOR_SCHEMA.UTILITY.DARK_GREY}`
      : `${COLOR_SCHEMA.BASIC.WHITE}`};
`

FormLoginStyled.forgotPassword = styled.span`
  ${text.SMALL_TEXT};
  cursor: pointer;
  color: ${props =>
    props.grey
      ? `${COLOR_SCHEMA.UTILITY.DARK_GREY}`
      : `${COLOR_SCHEMA.BASIC.WHITE}`};
`

FormLoginStyled.error = styled.p`
  color: ${COLOR_SCHEMA.GENERAL.RED_NEON};
`

FormLoginStyled.label = styled.label`
  ${text.SMALL_TEXT};
  margin-left: ${SIZE.NORMAL};
  color: ${COLOR_SCHEMA.UTILITY.DARK_GREY};
`

FormLoginStyled.field = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 8px;
`

FormLoginStyled.link = styled.a`
  color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  margin-left: ${SIZE.FIFTH};
  cursor: pointer;
`

FormLoginStyled.paragraph = styled.p`
  ${text.SMALL_TEXT};
  display: flex;
  margin-top: ${SIZE.QUARTER};
`

FormLoginStyled.body = styled.section`
  padding: ${PADDING.NORMAL} ${PADDING.NORMAL} 0 ${PADDING.NORMAL};
`

FormLoginStyled.footer = styled.section`
  display: flex;
  justify-content: center;
  border: 1px solid ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  border-bottom: none;
  border-left: none;
  border-right: none;
`

FormLoginStyled.buttonLogin = styled(Button)`
  width: 100%;
  margin-top: ${SIZE.HALF};
  margin-bottom: ${SIZE.NORMAL};
`

FormLoginStyled.checkbox = styled(Checkbox)`
  margin-bottom: ${SIZE.LARGE};
`

export default FormLoginStyled

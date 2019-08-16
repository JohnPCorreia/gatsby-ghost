import { css } from 'styled-components';
import { COLOR_SCHEMA, FONT_SIZE, PADDING } from './main';

// Transition components for buttons

export function transitionPrimary() {
  return `
    transition: box-shadow 200ms linear, background-color 200ms linear;
    
    &:hover {
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
      background-color: ${COLOR_SCHEMA.GENERAL.BLUE_DARKEN};
    }
  `;
}

export function transitionSecondary() {
  return `
    transition: box-shadow 200ms linear;
    
    &:hover {
      box-shadow: 0 0 0 1px ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
    }
  `;
}

export function transitionTertiary() {
  return `
    transition: box-shadow 200ms linear, background-color 200ms linear;

    &:hover {
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.10);
      border: 2px solid ${COLOR_SCHEMA.GENERAL.GREY_ALTO};
    }
  `;
}

// Primary button

export const BUTTON_PRIMARY_XLARGE = css`
  background-color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLOR_SCHEMA.BASIC.WHITE};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 48px;
  padding: 0 ${PADDING.NORMAL_AND_HALF};
  ${transitionPrimary()}
`;

export const BUTTON_PRIMARY_LARGE = css`
  background-color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLOR_SCHEMA.BASIC.WHITE};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 40px;
  padding: 0 ${PADDING.NORMAL_AND_QUARTER};
  ${transitionPrimary()}
`;

export const BUTTON_PRIMARY_MEDIUM = css`
  background-color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLOR_SCHEMA.BASIC.WHITE};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 32px;
  min-width: 65px;
  padding: 0 ${PADDING.THREE_QUARTERS};
  ${transitionPrimary()}
`;

export const BUTTON_PRIMARY_SMALL = css`
  background-color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  color: ${COLOR_SCHEMA.BASIC.WHITE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_12PX};
  height: 25px;
  min-width: 60px;
  padding: 0 ${PADDING.THREE_QUARTERS};
  ${transitionPrimary()}
`;

export const BUTTON_PRIMARY_XSMALL = css`
  background-color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_12PX};
  width: 67px;
  height: 24px;
  padding: 0 ${PADDING.THREE_QUARTERS};
  ${transitionPrimary('COLOR_SCHEMA.GENERAL.BLUE_DARKEN')}

`;

// Secondary button

export const BUTTON_SECONDARY_XLARGE = css`
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  border-radius: 3px;
  border: 1px solid ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 48px;
  padding: 0 ${PADDING.NORMAL_AND_HALF};
  ${transitionSecondary()}
`;

export const BUTTON_SECONDARY_LARGE = css`
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  border: 1px solid ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 40px;
  padding: 0 ${PADDING.NORMAL_AND_QUARTER};
  ${transitionSecondary()}
`;

export const BUTTON_SECONDARY_MEDIUM = css`
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  border: 1px solid ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 32px;
  min-width: 65px;
  padding: 0 ${PADDING.THREE_QUARTERS};
  ${transitionSecondary()}
`;

export const BUTTON_SECONDARY_SMALL = css`
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  border: 1px solid ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_12PX};
  height: 25px;
  min-width: 60px;
  padding: 0 ${PADDING.THREE_QUARTERS};
  ${transitionSecondary()}
`;

// Tertiary button

export const BUTTON_TERTIARY_XLARGE = css`
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  border-radius: 3px;
  border: 1px solid ${COLOR_SCHEMA.GENERAL.GREY_ALTO};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 48px;
  padding: 0 ${PADDING.NORMAL_AND_HALF};
  ${transitionTertiary()}
`;

export const BUTTON_TERTIARY_LARGE = css`
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  border-radius: 3px;
  border: 1px solid ${COLOR_SCHEMA.GENERAL.GREY_ALTO};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLOR_SCHEMA.BASIC.BLACK};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 40px;
  padding: 0 ${PADDING.NORMAL_AND_QUARTER};
  ${transitionTertiary()}
`;

export const BUTTON_TERTIARY_MEDIUM = css`
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  border-radius: 3px;
  border: 1px solid ${COLOR_SCHEMA.GENERAL.GREY_ALTO};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLOR_SCHEMA.BASIC.BLACK};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 32px;
  min-width: 65px;
  padding: 0 ${PADDING.THREE_QUARTERS};
  ${transitionTertiary()}
`;

export const BUTTON_TERTIARY_SMALL = css`
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  border-radius: 3px;
  border: 1px solid ${COLOR_SCHEMA.GENERAL.GREY_ALTO};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLOR_SCHEMA.BASIC.BLACK};
  font-size: ${FONT_SIZE.FONT_12PX};
  height: 25px;
  min-width: 60px;
  padding: 0 ${PADDING.THREE_QUARTERS};
  ${transitionTertiary()}
`;

// Link button

export const BUTTON_LINK_MEDIUM = css`
  background-color: transparent;
  color: ${COLOR_SCHEMA.PRIMARY.PRIMARY_BLUE};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 32px;
  min-width: 65px;
  padding: 0 ${PADDING.THREE_QUARTERS};
`;

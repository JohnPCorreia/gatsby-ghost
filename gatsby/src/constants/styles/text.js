import { css } from 'styled-components';
import { COLOR_SCHEMA, FONT_SIZE, FONT_WEIGHT } from './main';

// ======= GENERAL TEXT =======

// USED FOR INTRO 22px
export const INTRO_TEXT = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_22PX};
  line-height: 1.71;
  font-weight: ${FONT_WEIGHT.LIGHT};
  font-style: normal;
  letter-spacing: -0.5px;
`;

// USED FOR PRIMARY TEXT 18px
export const LARGE_TEXT = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_18PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

// USED FOR DEFAULT TEXT 16px
export const NORMAL_TEXT = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_16PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

// USED FOR SECONDARY TEXT 14px
export const SMALL_TEXT = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_14PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

// USED FOR SECONDARY TEXT 14px - DARK
export const SMALL_TEXT_DARK = css`
  color: ${COLOR_SCHEMA.PRIMARY.DARK_GREY};
  font-size: ${FONT_SIZE.FONT_14PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

// USED FOR DETAILS TEXT OR SMALL DESCRIPTIONS 12px
export const MARGINAL_TEXT = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_12PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

// USED FOR DETAILS TEXT OR SMALL DESCRIPTIONS 12px - DARK
export const MARGINAL_TEX_DARK = css`
  color: ${COLOR_SCHEMA.PRIMARY.DARK_GREY};
  font-size: ${FONT_SIZE.FONT_12PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

// USED FOR QUOTES 20px
export const BLOCK_QUOTE = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_20PX};
  font-weight: ${FONT_WEIGHT.LIGHT};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

// USED FOR TAGS ON CARDS 10px
export const TAG_TEXT = css`
  font-size: ${FONT_SIZE.FONT_10PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.6;
  vertical-align: middle;
  text-align: center;
`;


// ======= HEADLINES =======

// H1 HEADLINE
export const XXLARGE = css`
  font-size: ${FONT_SIZE.FONT_48PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: ${FONT_SIZE.FONT_52PX};
  letter-spacing: -0.5px;
`;

// H2 HEADLINE
export const XLARGE = css`
  font-size: ${FONT_SIZE.FONT_40PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: ${FONT_SIZE.FONT_44PX};
  letter-spacing: -0px;
`;

// H3 HEADLINE
export const MEDIUM = css`
  font-size: ${FONT_SIZE.FONT_32PX};
  font-weight: ${FONT_WEIGHT.BOLD};
  font-style: normal;
  line-height: 1.13;
  letter-spacing: -0.5px;
`;

// H4 HEADLINE
export const SMALL = css`
  font-size: ${FONT_SIZE.FONT_24PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: ${FONT_SIZE.FONT_28PX};
  letter-spacing: -0.5px;
`;

// H5 HEADLINE
export const XSMALL = css`
  font-size: ${FONT_SIZE.FONT_20PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: ${FONT_SIZE.FONT_24PX};  
  letter-spacing: -0.5px;
`;

// H6 HEADLINE
export const XXSMALL = css`
  font-size: ${FONT_SIZE.FONT_16PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: ${FONT_SIZE.FONT_24PX};
  letter-spacing: -0.5px;
`;

// ======= SECTIONS TITLES =======

// USED FOR HERO ON FRONTPAGE AND RAISES PAGE 40px
export const HERO = css`
  font-size: ${FONT_SIZE.FONT_40PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: ${FONT_SIZE.FONT_44PX};
  letter-spacing: -0.5px;
`;

// USED FOR TITLE ON SECTIONS OF NAVIGATION - 32px
export const SECTION = css`
  font-size: ${FONT_SIZE.FONT_32PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.13;
  letter-spacing: -0.5px;
`;

// USED FOR TITLE ON SUBSECTIONS OF NAVIGATION - 24px
export const SUB_SECTION = css`
  font-size: ${FONT_SIZE.FONT_24PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -0.5px;
`;

// USED FOR MANIFESTO ABOUTUS 24px
export const SUB_SECTION_BOLD = css`
  font-size: ${FONT_SIZE.FONT_24PX};
  font-weight: ${FONT_WEIGHT.BOLD};
  font-style: normal;
  line-height: ${FONT_SIZE.FONT_28PX};
  letter-spacing: -0.5px;
`;

// ======= CARDS TITLES =======

// USED FOR HEADERS TABLES AND CARDS 20px
export const BIG_CARD_TITLE = css`
  font-size: ${FONT_SIZE.FONT_20PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: ${FONT_SIZE.FONT_24PX};
  letter-spacing: -0.5px;
`;

// USED FOR CARDS TITLE 16px
export const SMALL_CARD_TITLE = css`
  font-size: ${FONT_SIZE.FONT_16PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.5px;
`;


// ======= DEPRECATED =======

export const LARGE_BODY = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_18PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const REGULAR_BODY = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_16PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const SECONDARY = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_14PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const SECONDARY_DARK = css`
  color: ${COLOR_SCHEMA.PRIMARY.DARK_GREY};
  font-size: ${FONT_SIZE.FONT_14PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const DESCRIPTIVE = css`
  color: ${COLOR_SCHEMA.PRIMARY.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_12PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;
export const DESCRIPTIVE_DARK = css`
  color: ${COLOR_SCHEMA.PRIMARY.DARK_GREY};
  font-size: ${FONT_SIZE.FONT_12PX};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

